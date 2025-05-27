from fastapi import APIRouter

from api.divisions import api_divisions
from config import API_PREFIX

api = APIRouter(prefix=API_PREFIX)

api.include_router(api_divisions)
