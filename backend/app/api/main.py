from fastapi import APIRouter

from app.api.routes import login, users, tasks, categories, tag, subtask

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
# api_router.include_router(utils.router, prefix="/utils", tags=["utils"])
api_router.include_router(tasks.router, prefix="/tasks", tags=["tasks"])
api_router.include_router(categories.router, prefix="/categories", tags=["categories"])
api_router.include_router(tag.router, prefix="/tags", tags=["tags"])
api_router.include_router(subtask.router, prefix="/subtasks", tags=["subtasks"])