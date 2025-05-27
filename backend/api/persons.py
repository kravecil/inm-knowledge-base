from uuid import UUID

from fastapi import APIRouter

from api.methods import api_get
from api.schemas.persons import PersonSchema

api_persons = APIRouter()


@api_persons.get("/persons/{division_uuid}", summary="Получение списка сотрудников подразделения")
def get_persons_by_division(division_uuid: UUID) -> list[PersonSchema]:
    persons = api_get(f"/organizationchart/divisionsinfo/{division_uuid}")
    result = [PersonSchema(**p) for p in persons]

    return result
