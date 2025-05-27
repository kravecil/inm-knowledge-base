from uuid import UUID

from pydantic import BaseModel


class DivisionSchema(BaseModel):
    GUID: UUID
    name: str
    parent_guid: UUID
