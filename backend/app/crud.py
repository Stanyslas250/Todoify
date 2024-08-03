from datetime import UTC, datetime
from typing import Any

from sqlmodel import Session, select

from app.core.security import get_password_hash, verify_password
from app.models import User, UserCreate, UserUpdate


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
        user_create, update={"password_hash": get_password_hash(user_create.password)}
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
        password_hash = get_password_hash(password)
        extra_data["password_hash"] = password_hash
    extra_data["updated_at"] = datetime.now(UTC)
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
    if not verify_password(password, db_user.password_hash):
        return None
    return db_user