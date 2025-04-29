import os
import uvicorn
from fastapi import FastAPI
from app.api.v1.endpoints import auth, users, upload, social
from app.models import user, social_account
from fastapi.middleware.cors import CORSMiddleware

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
    allow_origins=["*"],  # Em produção, configure os domínios específicos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(social.router, prefix="/social", tags=["Social"])

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app.main:app", host="0.0.0.0", port=port)
