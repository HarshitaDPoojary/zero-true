from typing import List, Optional, Union
from datetime import date
from pydantic import Field, field_validator, validator
from pydantic.types import Literal
from zt_backend.models.components.zt_component import ZTComponent
from zt_backend.models.components.validations import validate_color
from zt_backend.models.state.user_state import UserContext

month_var ="month"
class DatePicker(ZTComponent):
    """Date Picker component allows a user to select a date"""
    component: str = Field("v-date-picker", description="Vue component name")
    # allowed_dates: Optional[Union[List[date], List[str]]] = Field(None, description="List of allowed dates or function to validate dates")
    value: any = Field ('', description="The input text value")
    hide_weekdays: Optional[bool] = Field(False, description="Hide the days of the week letters in the calendar view")
    landscape: Optional[bool] = Field(False, description= "Puts the Date Picker component into landscape mode.")
    month : Optional[int|str] = Field(None, description="The current month number to show in the Date picker view")
    next_icon: str = Field('$next', description= "Sets the icon for next month/year button in the Date Picker Component") #is this correct?
    prev_icon: str = Field('$prev', description= "Sets the icon for prev month/year button in the Date Picker Component") #is this correct?
    view_mode: Literal[f'{month_var}', 'months', 'year'] = Field('month', description="Determines which picker is being displayed. Allowed values: 'month', 'months', 'year'")
    weekdays: Optional[List[int]] = Field([0, 1, 2, 3, 4, 5, 6], description="An array of weekdays to display")
    year: Optional[int] = Field(None, description="The current year number to show")
    disabled: Optional[bool] = Field(None, description="Determines if the Date Picker component is disabled")
    readonly: Optional[bool] = Field(None, description="Determines if the Date Picker component is read-only")
    color: Optional[str] = Field(None, pre=True, description="Color of the Calendar. Can be custom or standard Material color")
    


    @validator('weekdays', pre=True, always=True)
    def validate_weekdays(cls, v):
        if all(isinstance(day, int) and 0 <= day <= 6 for day in v):
            return v
        else:
            raise ValueError("All items in weekdays must be integers between 0 and 6 inclusive")


    # @validator('allowed_dates', pre=True, always=True)
    # def validate_allowed_dates(cls, v):
    #     if isinstance(v, list):
    #         if all(isinstance(d, (date, str)) for d in v):
    #             return v
    #         else:
    #             raise ValueError("All items in allowed_dates must be of type date or str")
    #     elif callable(v):
    #         return v
    #     elif v is None:
    #         return v
    #     else:
    #         raise ValueError("allowed_dates must be a list of dates/strings or a callable function")

    # @validator('multiple', pre=True, always=True)
    # def validate_multiple(cls, v):
    #     if isinstance(v, (int, bool)):
    #         return v
    #     elif isinstance(v, str) and v == 'range':
    #         return v
    #     else:
    #         raise ValueError("multiple must be an integer, boolean, or the string 'range'")
