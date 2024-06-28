from pydantic import Field, validator,field_validator
from zt_backend.models.components.zt_component import ZTComponent
from zt_backend.models.components.validations import validate_color
from typing import List, Union, Optional
from zt_backend.models.state.user_state import UserContext

class Tabs(ZTComponent):
    """Tabs component allows users to select from a list of options. Can be a single or multiple selection"""
    
    component: str = Field("v-tabs", description="Vue component name")
    multiple: bool = Field(False, description="Determines if multiple selections are allowed")
    density: str = Field("default", enum=["default","comfortable","compact"],description="Determines if the select box is dense")
    disabled: bool = Field(False, description="Determines if the select box is disabled")
    direction: str= Field("horizontal", enum=["horizontal","vertical"], description="Changes the direction of the tabs. Can be either horizontal or vertical")
    color: Optional[str] = Field("primary", pre=True, description="Color of the range slider. Can be custom or standard Material color")
    triggerEvent: str = Field('update:modelValue',description="Trigger event for when to trigger a run")
    height: Union[str,int]= Field("100%", description= "height of tab")
    grow: bool=Field(False, description="Force v-tab to take up all available space")
    items: List[Union[str, int]] = Field([], description="Options for the select box. Can be a list of strings or integers")
    align_tabs: str=Field("start", enum= ["start","title","center","end"], description="align tabs")
    center_active: bool= Field(False, description="Selected tab to be centered")
    value: Union[List[Union[str, int]],str,int] = Field("", description="Selected options for tabs")
    childComponents: List[str] = Field([], description="List of child component ids to be placed within the tab")


class Tab(ZTComponent):
    component: str = Field("v-tab", description="Vue component name")
    density: str = Field("default", enum=["default","comfortable","compact"],description="Determines if the select box is dense")
    disabled: bool = Field(False, description="Determines if the select box is disabled")
    direction: str= Field("horizontal", enum=["horizontal","vertical"], description="Changes the direction of the tabs. Can be either horizontal or vertical")
    color: Optional[str] = Field("primary", pre=True, description="Color of the range slider. Can be custom or standard Material color")
    height: Union[str,int]= Field("100%", description= "height of tab")
    fixed:bool= Field(False, description="Selected tab to be centered")
    readonly: Optional[bool] = Field(None, description="Determines if the select box is read-only")
    text: str= Field("", description="text for tab")
    value: Union[List[Union[str, int]],str,int] = Field("", description="Selected options for tabs")
    childComponents: List[str] = Field([], description="List of child component ids to be placed within the tab")


    @field_validator('color')
    def validate_color(cls, color):
        return validate_color(color)