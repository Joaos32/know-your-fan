from pydantic import BaseModel

class SocialAccountCreate(BaseModel):
    provider: str
    access_token: str
    username: str | None = None
    profile_url: str | None = None

class SocialAccountOut(BaseModel):
    id: int
    provider: str
    username: str | None = None
    profile_url: str | None = None

    class Config:
        orm_mode = True

# 🔥 Adicionar esta classe que falta:
class SocialAccountResponse(SocialAccountOut):
    pass
