from uuid import UUID

from pydantic import BaseModel, Field


class DivisionSchema(BaseModel):
    GUID: UUID = Field(validation_alias="GUID")
    name: str = Field(validation_alias="Name")
    parent_guid: UUID = Field(validation_alias="ParentGuid")
