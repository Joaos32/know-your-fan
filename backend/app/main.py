from fastapi import FastAPI
from app.api.v1.endpoints import auth, users, upload, social
from app.models import user, social_account

app = FastAPI(
    title="Know Your Fan API",
    version="1.0.0"
)

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(social.router, prefix="/social", tags=["Social"])
