from typing import Any, List

from fastapi import APIRouter, HTTPException

from app.api.deps import CurrentUser, SessionDep
from app.models import Tag, TagCreate, TagUpdate, Message, TaskTag
from app.services import tagServices, taskServices

router = APIRouter()

@router.post("/", response_model=Tag)
def create_tag(session: SessionDep, current_user: CurrentUser,
                tag_in: TagCreate, task_id: int) -> Tag:
    """
    Create new tag.
    """
    try:
        tag = tagServices.create_tag(db=session, tag=tag_in, user_id=current_user.id)
        task = taskServices.get_task(db=session, task_id=task_id)
        if not task:
            raise HTTPException(status_code=404, detail="Task not found.")
        tagServices.create_task_tag(db=session, task_id=task_id, tag_id=tag.id)
        return tag
    except Exception as e:
        raise HTTPException(status_code=500, detail="An error occurred while creating the tag.")

@router.put("/{id}", response_model=Tag)
def update_tag(session: SessionDep, current_user: CurrentUser,
                id: int, tag_in: TagUpdate) -> Tag:
    """
    Update existing tag.
    """
    try:
        tag = tagServices.get_tag(db=session, tag_id=id)
        if not tag:
            raise HTTPException(status_code=404, detail="Tag not found.")
        if tag.user_id != current_user.id:
            raise HTTPException(status_code=403, detail="You are not authorized to update this tag.")
        tag = tagServices.update_tag(db=session, tag_id=id, tag_update=tag_in)
        return tag
    except Exception as e:
        raise HTTPException(status_code=500, detail="An error occurred while updating the tag.")

@router.delete("/{id}", response_model=Message)
def delete_tag(session: SessionDep, current_user: CurrentUser,
                id: int) -> Message:
    """
    Delete tag by ID.
    """
    try:
        tag = tagServices.get_tag(db=session, tag_id=id)
        if not tag:
            raise HTTPException(status_code=404, detail="Tag not found.")
        if tag.user_id != current_user.id:
            raise HTTPException(status_code=403, detail="You are not authorized to delete this tag.")
        tagServices.delete_tag(db=session, tag_id=id)
        return Message(message="Tag deleted successfully.")
    except Exception as e:
        raise HTTPException(status_code=500, detail="An error occurred while deleting the tag.")

@router.get("/", response_model=List[Tag])
def get_all_tags(session: SessionDep, current_user: CurrentUser, 
                    skip: int = 0, limit: int = 10) -> List[Tag]:
    """
    Get all tags for the current user.
    """
    try:
        tags = tagServices.get_tags(db=session, user_id=current_user.id, skip=skip, limit=limit)
        return tags
    except Exception as e:
        raise HTTPException(status_code=500, detail="An error occurred while retrieving the tags.")

@router.get("/{id}", response_model=Tag)
def get_tag_by_id(session: SessionDep, current_user: CurrentUser,
                    id: int) -> Tag:
    """
    Get tag by ID.
    """
    try:
        tag = tagServices.get_tag(db=session, tag_id=id)
        if not tag:
            raise HTTPException(status_code=404, detail="Tag not found.")
        if tag.user_id != current_user.id:
            raise HTTPException(status_code=403, detail="You are not authorized to view this tag.")
        return tag
    except Exception as e:
        raise HTTPException(status_code=500, detail="An error occurred while retrieving the tag.")