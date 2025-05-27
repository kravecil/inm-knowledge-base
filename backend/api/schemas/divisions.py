from uuid import UUID

from pydantic import BaseModel, Field


class DivisionSchema(BaseModel):
    GUID: UUID = Field(validation_alias="GUID", serialization_alias="id")
    name: str = Field(validation_alias="Name", serialization_alias="name")
    parent_guid: UUID = Field(
        validation_alias="ParentGuid", serialization_alias="parentId"
    )
