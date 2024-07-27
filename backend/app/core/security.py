from datetime import datetime, timedelta
from typing import Any

import jwt
from passlib.context import CryptContext

from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


ALGORITHM = "HS256"


def create_access_token(subject: str | Any, expires_delta: timedelta) -> str:
    """
    Create an access token for the specified subject with the given expiration time.

    Args:
        subject: The subject for which the access token is being created.
        expires_delta: The timedelta for the token expiration.

    Returns:
        str: The generated access token.
    """
    expire = datetime.now(datetime.UTC) + expires_delta
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_password(plain_password: str, hashed_password: str) -> bool:
    '''
Verify if the plain password matches the hashed password.

Args:
    plain_password (str): The plain text password to verify.
    hashed_password (str): The hashed password to compare against.

Returns:
    bool: True if the plain password matches the hashed password, False otherwise.
'''
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    '''
Generate a password hash for the input password using bcrypt algorithm.

Parameters:
    password (str): The password to hash.

Returns:
    str: The hashed password.
'''
    return pwd_context.hash(password)
