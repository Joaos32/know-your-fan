from pydantic import BaseModel, ConfigDict

class SocialAccountCreate(BaseModel):
    provider: str
    access_token: str
    username: str | None = None
    profile_url: str | None = None

class SocialAccountOut(BaseModel):
    id: int
    platform: str
    username: str

    model_config = ConfigDict(from_attributes=True)

class MySchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)