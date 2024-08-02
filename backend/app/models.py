from pydantic import EmailStr
from sqlmodel import Field, Relationship, SQLModel


from typing import Optional
from datetime import datetime, UTC

class UserBase(SQLModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserUpdate(UserBase):
    password: Optional[str] = None

class User(UserBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    password_hash: str
    created_at: datetime = Field(default_factory=datetime.now(UTC))
    updated_at: datetime = Field(default_factory=datetime.now(UTC), nullable=True)

class TaskBase(SQLModel):
    title: str
    description: Optional[str] = None
    due_date: Optional[datetime] = None
    completed: bool = False
    priority: Optional[str] = None

class TaskCreate(TaskBase):
    pass

class TaskUpdate(TaskBase):
    pass

class Task(TaskBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.now(UTC))
    updated_at: datetime = Field(default_factory=datetime.now(UTC))
    user_id: int = Field(foreign_key="user.id")
    category_id: Optional[int] = Field(foreign_key="category.id")

class CategoryBase(SQLModel):
    name: str

class CategoryCreate(CategoryBase):
    pass

class CategoryUpdate(CategoryBase):
    pass

class Category(CategoryBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")

class SubtaskBase(SQLModel):
    title: str
    completed: bool = False

class SubtaskCreate(SubtaskBase):
    pass

class SubtaskUpdate(SubtaskBase):
    pass

class Subtask(SubtaskBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    task_id: int = Field(foreign_key="task.id")
    created_at: datetime = Field(default_factory=datetime.now(UTC))
    updated_at: datetime = Field(default_factory=datetime.now(UTC))

class TagBase(SQLModel):
    name: str

class TagCreate(TagBase):
    pass

class TagUpdate(TagBase):
    pass

class Tag(TagBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")

class TaskTag(SQLModel, table=True):
    task_id: int = Field(foreign_key="task.id", primary_key=True)
    tag_id: int = Field(foreign_key="tag.id", primary_key=True)


# Generic message
class Message(SQLModel):
    message: str


# JSON payload containing access token
class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"


# Contents of JWT token
class TokenPayload(SQLModel):
    sub: int | None = None


class NewPassword(SQLModel):
    token: str
    new_password: str = Field(min_length=8, max_length=40)
