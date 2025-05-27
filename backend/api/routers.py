from fastapi import APIRouter

from api.divisions import api_divisions
from api.persons import api_persons
from config import API_PREFIX

api = APIRouter(prefix=API_PREFIX)

api.include_router(api_divisions)
api.include_router(api_persons)
