**README.md for Todoify Backend**

# Todoify Backend

This README provides an overview of the Todoify backend, which is a task management application built using FastAPI, SQLModel, and Pydantic.

## Technology Stack

- FastAPI: A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.
- SQLModel: An SQL toolkit and ORM built with Python 3.7+ and SQLAlchemy core.
- Pydantic: Data validation and settings management using Python type hints.
- PostgreSQL: A powerful, open-source object-relational database system.

## Getting Started

To get started with the Todoify backend, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/StanyslasMoubiligui/Todoify.git
```

2. Navigate to the project directory:

```bash
cd Todoify
```

3. Install the required dependencies:

```bash
pip install -r requirements.txt
```

4. Run the FastAPI server:

```bash
uvicorn main:app --reload
```

## Project Structure

The Todoify backend follows a modular and organized structure, with clear separation of concerns between different functionalities.

```
app/
├── alembic/
│   └── ... (database migration files)
├── api/
│   ├── __init__.py
│   ├── deps.py
│   ├── main.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── login.py
│   │   ├── users.py
│   │   ├── tasks.py
│   │   ├── categories.py
│   │   ├── tags.py
│   │   └── subtasks.py
│   └── ...
├── core/
│   ├── __init__.py
│   ├── config.py
│   ├── db.py
│   └── security.py
├── services/
│   ├── __init__.py
│   ├── categoryServices.py
│   ├── subtaskServices.py
│   ├── tagServices.py
│   └── taskServices.py
├── test/
│   ├── __init__.py
│   └── ... (test cases)
├── Dockerfile
├── alembic.ini
├── backend_pre_start.py
├── initiat_data.py
├── poetry.lock
├── prestart.sh
└── pyproject.toml
```

| Route                     | Endpoint                         | Description                                                                                                 | Requirement    |
| ------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------- |
| /login                    | POST /login                      | User login endpoint. Accepts username and password, and returns a JWT token.                                | Authentication |
| /users                    | POST /users                      | Create a new user. Requires admin privileges.                                                               | Admin          |
| /users                    | GET /users                       | Get a list of all users. Requires admin privileges.                                                         | Admin          |
| /users/{user_id}          | GET /users/{user_id}             | Get details of a specific user by their ID. Requires admin privileges or ownership of the user.             | Authentication |
| /users/{user_id}          | PUT /users/{user_id}             | Update details of a specific user by their ID. Requires admin privileges or ownership of the user.          | Authentication |
| /users/{user_id}          | DELETE /users/{user_id}          | Delete a specific user by their ID. Requires admin privileges or ownership of the user.                     | Authentication |
| /tasks                    | POST /tasks                      | Create a new task. Requires authentication.                                                                 | Authentication |
| /tasks                    | GET /tasks                       | Get a list of all tasks. Requires authentication.                                                           | Authentication |
| /tasks/{task_id}          | GET /tasks/{task_id}             | Get details of a specific task by their ID. Requires authentication and ownership of the task.              | Authentication |
| /tasks/{task_id}          | PUT /tasks/{task_id}             | Update details of a specific task by their ID. Requires authentication and ownership of the task.           | Authentication |
| /tasks/{task_id}          | DELETE /tasks/{task_id}          | Delete a specific task by their ID. Requires authentication and ownership of the task.                      | Authentication |
| /categories               | POST /categories                 | Create a new category. Requires admin privileges.                                                           | Admin          |
| /categories               | GET /categories                  | Get a list of all categories. Requires authentication.                                                      | Authentication |
| /categories/{category_id} | GET /categories/{category_id}    | Get details of a specific category by their ID. Requires authentication.                                    | Authentication |
| /categories/{category_id} | PUT /categories/{category_id}    | Update details of a specific category by their ID. Requires admin privileges.                               | Admin          |
| /categories/{category_id} | DELETE /categories/{category_id} | Delete a specific category by their ID. Requires admin privileges.                                          | Admin          |
| /tags                     | POST /tags                       | Create a new tag. Requires admin privileges.                                                                | Admin          |
| /tags                     | GET /tags                        | Get a list of all tags. Requires authentication.                                                            | Authentication |
| /tags/{tag_id}            | GET /tags/{tag_id}               | Get details of a specific tag by their ID. Requires authentication.                                         | Authentication |
| /tags/{tag_id}            | PUT /tags/{tag_id}               | Update details of a specific tag by their ID. Requires admin privileges.                                    | Authentication          |
| /tags/{tag_id}            | DELETE /tags/{tag_id}            | Delete a specific tag by their ID. Requires admin privileges.                                               | Admin          |
| /subtasks                 | POST /subtasks                   | Create a new subtask. Requires authentication and ownership of the parent task.                             | Authentication |
| /subtasks                 | GET /subtasks                    | Get a list of all subtasks. Requires authentication and ownership of the parent task.                       | Authentication |
| /subtasks/{subtask_id}    | GET /subtasks/{subtask_id}       | Get details of a specific subtask by their ID. Requires authentication and ownership of the parent task.    | Authentication |
| /subtasks/{subtask_id}    | PUT /subtasks/{subtask_id}       | Update details of a specific subtask by their ID. Requires authentication and ownership of the parent task. | Authentication |
| /subtasks/{subtask_id}    | DELETE /subtasks/{subtask_id}    | Delete a specific subtask by their ID. Requires authentication and ownership of the parent task.            | Authentication |

The table above provides a summary of the available routes, endpoints, descriptions, and requirements in the Todoify backend. The "Requirement" column indicates the specific privileges or conditions required for accessing each endpoint. The requirements are categorized as "Authentication" for general user access, and "Admin" for administrative tasks.

## Key Features

- User authentication and authorization using JWT (JSON Web Tokens).
- CRUD operations for tasks, categories, tags, and subtasks.
- Database migrations using Alembic.
- Error handling and validation using Pydantic.
- Unit tests using pytest.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/StanyslasMoubiligui/Todoify/blob/main/LICENSE) file for more information.

## Acknowledgments

This project was inspired by various open-source projects and tutorials. Special thanks to the FastAPI community for their valuable contributions.
