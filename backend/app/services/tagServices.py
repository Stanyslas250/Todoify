from typing import List, Optional
from sqlmodel import Session, select

from models import Tag, TagCreate, TagUpdate

def create_tag(db: Session, tag: TagCreate, user_id: int) -> Tag:
    db_tag = Tag(**tag.model_dump(), user_id=user_id)
    db.add(db_tag)
    db.commit()
    db.refresh(db_tag)
    return db_tag

def get_tag(db: Session, tag_id: int) -> Optional[Tag]:
    return db.get(Tag, tag_id)

def get_tags(db: Session, user_id: int, skip: int = 0, limit: int = 10) -> List[Tag]:
    tags = db.exec(select(Tag).where(Tag.user_id == user_id).offset(skip).limit(limit)).all()
    return tags

def update_tag(db: Session, tag_id: int, tag_update: TagUpdate) -> Optional[Tag]:
    db_tag = db.get(Tag, tag_id)
    if db_tag:
        tag_data = tag_update.model_dump(exclude_unset=True)
        for key, value in tag_data.items():
            setattr(db_tag, key, value)
        db.commit()
        db.refresh(db_tag)
    return db_tag

def delete_tag(db: Session, tag_id: int) -> bool:
    db_tag = db.get(Tag, tag_id)
    if db_tag:
        db.delete(db_tag)
        db.commit()
        return True
    return False
