from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import auth, users, upload, social
from app.models import user, social_account  # Garante que os modelos sejam registrados

app = FastAPI(
    title="Know Your Fan API",
    description="🚀 API para análise de perfis sociais e validação de documentos. Feito em FastAPI + PostgreSQL.",
    version="1.0.0",
    contact={
        "name": "João Vitor",
        "url": "https://github.com/Joaos32/know-your-fan",
        "email": "seuemail@exemplo.com",  # ajuste se quiser
    },
    license_info={
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT",
    }
)

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(social.router, prefix="/social", tags=["Social"])
