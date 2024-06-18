from pydantic import BaseModel,Field
from typing import ForwardRef,Union
from typing import List, Optional, Literal
from zt_backend.models.state.user_state import UserContext

    
class Radio(BaseModel):
    """Radio Button lists attributes for every item that is listed for selection"""
    
    
    '''
    Radio button also has value and model-value WTD
    ''' 


class RadioGroup(BaseModel):
    """Radio Group lists the items from which you could select one,"""
    component: str = Field("v-radio-group", description="Radio Group")
    #value
    childComponents: List[Radio] = Field([], description="List of child component ids to be placed within the card")
    color: Optional[str] = Field(None, description="Background color of the card")
    direction: Literal["horizontal", "vertical"]  = Field('horizontal', description="Changes the direction of the Radio Buttons")
    label: Optional[str] = Field(None, description="Label for the Radio Group")
    disabled: Optional[bool] = Field(False, description="Determines if the radio button is disabled")
    readonly: Optional[bool] = Field(None, description="Determines if the radio button is read-only")
    triggerEvent: str = Field('update:modelValue',description="Trigger event for when to run based on the selected value")

