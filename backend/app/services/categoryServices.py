from app.models import Category, CategoryCreate, CategoryUpdate
from typing import List, Optional
from sqlmodel import Session, select


def create_category(db: Session, category: CategoryCreate, user_id: int) -> Category:
    db_category = Category(**category.model_dump(), user_id=user_id)
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

def get_category(db: Session, category_id: int) -> Optional[Category]:
    return db.get(Category, category_id)

def get_categories(db: Session, user_id: int, skip: int = 0, limit: int = 10) -> List[Category]:
    categories = db.exec(select(Category).where(Category.user_id == user_id).offset(skip).limit(limit)).all()
    return categories

def update_category(db: Session, category_id: int, category_update: CategoryUpdate) -> Optional[Category]:
    db_category = db.get(Category, category_id)
    if db_category:
        category_data = category_update.model_dump(exclude_unset=True)
        for key, value in category_data.items():
            setattr(db_category, key, value)
        db.commit()
        db.refresh(db_category)
    return db_category

def delete_category(db: Session, category_id: int) -> bool:
    db_category = db.get(Category, category_id)
    if db_category:
        db.delete(db_category)
        db.commit()
        return True
    return False
