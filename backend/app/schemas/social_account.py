from pydantic import BaseModel

class SocialAccountCreate(BaseModel):
    provider: str
    access_token: str
    username: str | None = None
    profile_url: str | None = None
    user_id: int  

class SocialAccountOut(BaseModel):
    id: int
    provider: str
    username: str | None = None
    profile_url: str | None = None
    user_id: int

    class Config:
        orm_mode = True
