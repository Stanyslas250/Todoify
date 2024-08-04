from typing import List, Optional
from sqlmodel import Session, select
from app.models import Task, TaskCreate, TaskUpdate  # Assurez-vous d'importer les modèles appropriés

def create_task(db: Session, task: TaskCreate, user_id: int) -> Task:
    db_task = Task(**task.model_dump(), user_id=user_id)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

def get_task(db: Session, task_id: int, user_id: int) -> Optional[Task]:
    task = db.exec(select(Task).where(Task.user_id == user_id, Task.id == task_id)).first()
    return task

def get_tasks(db: Session, user_id: int, skip: int = 0, limit: int = 10) -> List[Task]:
    tasks = db.exec(select(Task).where(Task.user_id == user_id).offset(skip).limit(limit)).all()
    return tasks

def update_task(db: Session, task_id: int, task_update: TaskUpdate) -> Optional[Task]:
    db_task = db.get(Task, task_id)
    if db_task:
        task_data = task_update.model_dump(exclude_unset=True)
        for key, value in task_data.items():
            setattr(db_task, key, value)
        db.commit()
        db.refresh(db_task)
    return db_task

def delete_task(db: Session, task_id: int) -> bool:
    db_task = db.get(Task, task_id)
    if db_task:
        db.delete(db_task)
        db.commit()
        return True
    return False
