from api import api
from api.methods import api_get
from api.schemas.divisions import DivisionSchema


@api.get("/divisions", summary="Получение структуры организации")
def get_divisions() -> list[DivisionSchema]:
    divisions = api_get("/organizationchart/divisions")
    result = [DivisionSchema(**d) for d in divisions]

    return result
