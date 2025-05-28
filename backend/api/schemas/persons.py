from datetime import date
from uuid import UUID

from pydantic import BaseModel, Field, computed_field


class PersonSchema(BaseModel):
    GUID: UUID = Field(validation_alias="GUID")
    tabnum: int = Field(validation_alias="TABNUM")
    name: str = Field(validation_alias="FIO")
    post: str = Field(validation_alias="Post")
    organization: str = Field(validation_alias="Organization")
    cur_action: str = Field(validation_alias="CurAction", exclude=True)
    date_cur_action: date = Field(validation_alias="DateCurAction", exclude=True)

    @computed_field  # type: ignore
    @property
    def hired_at(self) -> date | None:
        if self.cur_action == "Прием":
            return self.date_cur_action
        return None

    @computed_field  # type: ignore
    @property
    def fired_at(self) -> date | None:
        if self.cur_action == "Увольнение":
            return self.date_cur_action
        return None

    @computed_field  # type: ignore
    @property
    def rehired_at(self) -> date | None:
        if self.cur_action == "Перемещение":
            return self.date_cur_action
        return None
