from typing import Annotated
from uuid import UUID

from pydantic import AfterValidator, BaseModel, Field

PARENT_UUID = UUID("00000000-0000-0000-0000-000000000000")


def replace_whitespaced(value: UUID) -> UUID | None:
    if value != PARENT_UUID:
        return value

    return None


class DivisionSchema(BaseModel):
    GUID: UUID = Field(validation_alias="GUID", serialization_alias="id")
    name: str = Field(validation_alias="Name", serialization_alias="name")
    parent_guid: Annotated[
        UUID | None,
        Field(
            validation_alias="ParentGuid",
            serialization_alias="parentId",
        ),
        AfterValidator(replace_whitespaced),
    ]
