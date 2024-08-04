from typing import Any, List

from fastapi import APIRouter,  HTTPException

from app.api.deps import CurrentUser, SessionDep
from app.models import Subtask, SubtaskCreate, SubtaskUpdate, Message
from app.services import subtaskServices

router = APIRouter()

@router.post("/", response_model=Subtask)
def create_subtask(session: SessionDep, current_user: CurrentUser, 
                    subtask_in: SubtaskCreate, task_id: int) -> Subtask:
    """
    Create new subtask.
    """
    try:
        subtask = subtaskServices.create_subtask(db=session, subtask=subtask_in, task_id=task_id)
        return subtask
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.put("/{id}", response_model=Subtask)
def update_subtask(session: SessionDep, current_user: CurrentUser,
                    id: int, subtask_in: SubtaskUpdate) -> Subtask:
    """
    Update existing subtask.
    """
    try:
        subtask = subtaskServices.update_subtask(db=session, subtask_id=id, subtask_update=subtask_in)
        return subtask
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.delete("/{id}", response_model=Message)
def delete_subtask(session: SessionDep, id: int) -> Message:
    """
    Delete existing subtask.
    """
    try:
        subtask = subtaskServices.get_subtask(db=session, subtask_id=id)
        if not subtask:
            raise HTTPException(status_code=404, detail="Subtask not found")
        subtaskServices.delete_subtask(db=session, subtask_id=id)
        return Message(message=f"{subtask.title} deleted successfully.")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/{id}", response_model=Subtask)
def get_subtask(session: SessionDep, current_user: CurrentUser, id: int) -> Subtask:
    """
    Get subtask by ID.
    """
    try:
        subtask = subtaskServices.get_subtask(db=session, subtask_id=id)
        if not subtask:
            raise HTTPException(status_code=404, detail="Subtask not found")
        return subtask
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/", response_model=List[Subtask])
def get_subtasks(session: SessionDep, current_user: CurrentUser, task_id: int) -> List[Subtask]:
    """
    Get all subtasks for a specific task.
    """
    try:
        subtasks = subtaskServices.get_subtasks(db=session, task_id=task_id)
        return subtasks
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))