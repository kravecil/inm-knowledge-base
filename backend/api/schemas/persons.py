from pydantic import BaseModel, Field
from uuid import UUID

class PersonSchema(BaseModel):
    GUID: UUID = Field(validation_alias="GUID")
    tabnum: int = Field(validation_alias="TABNUM")
    name: str = Field(validation_alias="FIO")
    post: str = Field(validation_alias="Post")