from typing import Any, List

from fastapi import APIRouter, HTTPException

from app.api.deps import CurrentUser, SessionDep
from app.models import Category, CategoryCreate, CategoryUpdate, Message
from app.services import categoryServices

router = APIRouter()


@router.post("/", response_model=Category)
def create_category(session: SessionDep, current_user: CurrentUser, 
                    category_in: CategoryCreate) -> Category:
    """
    Create new category.
    """
    try:
        category = categoryServices.create_category(db=session, category=category_in, user_id=current_user.id)
        return category
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.put("/{id}", response_model=Category)
def update_category(session: SessionDep, current_user: CurrentUser, 
                   id: int, category_in: CategoryUpdate) -> Category:
    """
    Update existing category.
    """
    try:
        category = categoryServices.get_category(db=session, category_id=id)
        if not category:
            raise HTTPException(status_code=404, detail="Category not found")
        if category.user_id!=current_user.id:
            raise HTTPException(status_code=403, detail="You are not authorized to update this category")
        category = categoryServices.update_category(db=session, category_id=id, category_update=category_in)
        return category
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.delete("/{id}", response_model=Message)
def delete_category(session: SessionDep, current_user: CurrentUser, id: int ) -> Message:
    """
    Delete a category.
    """
    try:
        category = categoryServices.get_category(db=session, category_id=id)
        if not category:
            raise HTTPException(status_code=404, detail="Category not found")
        if category.user_id!=current_user.id:
            raise HTTPException(status_code=403, detail="You are not authorized to delete this category")
        categoryServices.delete_category(db=session, category_id=id)
        return Message(message="Category deleted successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/", response_model=List[Category])
def get_categories(session: SessionDep, current_user: CurrentUser, 
                skip: int = 0, limit: int = 100) -> Any:
    """
    Get all categories.
    """
    try:
        tasks = categoryServices.get_categories(db=session, user_id=current_user.id, skip=skip, limit=limit)
        return tasks
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{id}", response_model=Category)
def get_category(session: SessionDep, current_user: CurrentUser, id: int) -> Category:
    """
    Get category by ID.
    """
    try:
        category = categoryServices.get_category(db=session, category_id=id)
        if not category:
            raise HTTPException(status_code=404, detail="Category not found")
        if category.user_id!=current_user.id:
            raise HTTPException(status_code=403, detail="You are not authorized to view this category")
        return category
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
