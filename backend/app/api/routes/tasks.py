from typing import Any, List

from fastapi import APIRouter, HTTPException

from app.api.deps import CurrentUser, SessionDep
from app.models import Task, TaskCreate,TaskUpdate, Message
from app.services import taskServices

router = APIRouter()


@router.get("/", response_model=List[Task])
def get_tasks(session: SessionDep, current_user: CurrentUser, 
            skip: int = 0, limit: int = 100) -> Any:
    """
    Get all tasks.
    """
    try:
        tasks = taskServices.get_tasks(db=session, user_id=current_user.id, 
                                        skip=skip, limit=limit)
        return tasks
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{id}", response_model=Task)
def get_task(session: SessionDep, id: int, current_user: CurrentUser) -> Task:
    """
    Get task by ID.
    """
    try:
        task = taskServices.get_task(db=session, task_id=id, user_id=current_user.id)
        if not task:
            raise HTTPException(status_code=404, detail="Task not found")
        return task
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/", response_model=Task)
def create_task(
    *, session: SessionDep, current_user: CurrentUser, task_in: TaskCreate
) -> Task:
    """
    Create new task.
    """
    try:
        task = taskServices.create_task(db=session, task=task_in, user_id=current_user.id)
        return task
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{id}", response_model=Task)
def update_task(
    *, session: SessionDep, current_user: CurrentUser, id: int, task_in: TaskUpdate
) -> Task | None:
    """
    Update task by ID.
    """
    try:
        task = taskServices.get_task(db=session, task_id=id)
        if not task:
            raise HTTPException(status_code=404, detail="Task not found")
        task = taskServices.update_task(db=session, task_id=id, task_update=task_in)
        return task
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{id}", response_model=Message)
def delete_task(*, session: SessionDep, current_user: CurrentUser, id: int) -> Message:
    try:
        task_out = taskServices.delete_task(db=session, task_id=id)
        if not task_out:
            raise HTTPException(status_code=404, detail="Task not found")
        return Message(message="Task deleted successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
