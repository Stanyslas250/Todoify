from models import Subtask, SubtaskCreate, SubtaskUpdate
from typing import List, Optional
from sqlmodel import Session, select
from datetime import datetime, UTC


def create_subtask(db: Session, subtask: SubtaskCreate, task_id: int) -> Subtask:
    db_subtask = Subtask(**subtask.model_dump(), task_id=task_id)
    db.add(db_subtask)
    db.commit()
    db.refresh(db_subtask)
    return db_subtask

def get_subtask(db: Session, subtask_id: int) -> Optional[Subtask]:
    return db.get(Subtask, subtask_id)

def get_subtasks(db: Session, task_id: int, skip: int = 0, limit: int = 10) -> List[Subtask]:
    subtasks = db.exec(select(Subtask).where(Subtask.task_id == task_id).offset(skip).limit(limit)).all()
    return subtasks

def update_subtask(db: Session, subtask_id: int, subtask_update: SubtaskUpdate) -> Optional[Subtask]:
    db_subtask = db.get(Subtask, subtask_id)
    if db_subtask:
        subtask_data = subtask_update.model_dump(exclude_unset=True)
        for key, value in subtask_data.items():
            setattr(db_subtask, key, value)
        db_subtask.updated_at = datetime.now(UTC)
        db.commit()
        db.refresh(db_subtask)
    return db_subtask

def delete_subtask(db: Session, subtask_id: int) -> bool:
    db_subtask = db.get(Subtask, subtask_id)
    if db_subtask:
        db.delete(db_subtask)
        db.commit()
        return True
    return False
