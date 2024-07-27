from typing import Any, Sequence

from sqlmodel import Session, select, delete

from app.core.security import get_password_hash, verify_password
from app.models import Task, TaskCreate, User, UserCreate, UserUpdate


def create_user(*, session: Session, user_create: UserCreate) -> User:
    '''
Create a new user in the database.

Parameters:
    session (Session): The database session.
    user_create (UserCreate): The user data to create.

Returns:
    User: The created user object.
'''
    db_obj = User.model_validate(
        user_create, update={"hashed_password": get_password_hash(user_create.password)}
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def update_user(*, session: Session, db_user: User, user_in: UserUpdate) -> Any:
    '''
Update a user in the database with the provided data.

Parameters:
    session (Session): The database session.
    db_user (User): The user object to update.
    user_in (UserUpdate): The updated user data.

Returns:
    Any: The updated user object.
'''
    user_data = user_in.model_dump(exclude_unset=True)
    extra_data = {}
    if "password" in user_data:
        password = user_data["password"]
        hashed_password = get_password_hash(password)
        extra_data["hashed_password"] = hashed_password
    db_user.sqlmodel_update(user_data, update=extra_data)
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user


def get_user_by_email(*, session: Session, email: str) -> User | None:
    """
    Retrieve a user from the database based on the provided email.

    Args:
        session: The database session to execute the query.
        email: The email address of the user to retrieve.

    Returns:
        The user object if found, otherwise None.
    """
    statement = select(User).where(User.email == email)
    session_user = session.exec(statement).first()
    return session_user

def authenticate(*, session: Session, email: str, password: str) -> User | None:
    '''
Authenticate a user based on the provided email and password.

Args:
    session: The database session to execute the query.
    email: The email address of the user to authenticate.
    password: The password to verify against the user's hashed password.

Returns:
    The user object if authentication is successful, otherwise None.
'''
    db_user = get_user_by_email(session=session, email=email)
    if not db_user:
       return None
    if not verify_password(password, db_user.hashed_password):
        return None
    return db_user


def create_task(*, session: Session, task_in: TaskCreate, owner_id: int) -> Task:
    '''
Create an task in the database.

Args:
    session (Session): The database session.
    task_in (TaskCreate): The task data to create.
    owner_id (int): The ID of the task owner.

Returns:
    task: The created task.
'''
    db_task = Task.model_validate(task_in, update={"owner_id": owner_id})
    session.add(db_task)
    session.commit()
    session.refresh(db_task)
    return db_task

def get_tasks_by_owner(*, session: Session, owner_id: int) -> Sequence[Task]:
    statement = select(Task).where(Task.owner_id == owner_id)
    tasks = session.exec(statement).fetchall()
    return tasks

def get_task_by_id(*, session: Session, task_id: int) -> Task | None:
    statement = select(Task).where(Task.id == task_id)
    task = session.exec(statement).first()
    return task

def update_task(*, session: Session, db_task: Task, task_in: TaskCreate) -> Task:
    task_data = task_in.model_dump(exclude_unset=True)
    db_task.sqlmodel_update(task_data)
    session.add(db_task)
    session.commit()
    session.refresh(db_task)
    return db_task

def delete_task(*, session: Session, task_id: int) -> bool | None:
    try:
        task_in_db = get_task_by_id(session=session, task_id=task_id)
        if task_in_db:
            session.delete(task_in_db)
            session.commit()
            return True
        else:
            return False
    except Exception:
        return None