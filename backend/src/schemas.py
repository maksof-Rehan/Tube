from pydantic import BaseModel

class UserRegister(BaseModel):
    customerName: str
    customerEmail: str
    customerPassword: str 