FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11

WORKDIR /app/

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | POETRY_HOME=/opt/poetry python && \
    cd /usr/local/bin && \
    ln -s /opt/poetry/bin/poetry && \
    poetry config virtualenvs.create false

# Copy poetry.lock* in case it doesn't exist in the repo
COPY ./pyproject.toml ./poetry.lock* /app/

# Allow installing dev dependencies to run tests
RUN poetry install

ENV PYTHONPATH=/app

COPY ./alembic.ini /app/

COPY ./prestart.sh /app/

COPY ./backend_pre_start.py /app/

COPY ./initiat_data.py /app/

COPY ./app /app/app

CMD ["fastapi", "run", "app/main.py", "--port", "80"]

EXPOSE 8000