from fastapi import APIRouter
from app.schemas import FanData

router = APIRouter()

@router.post("/submit")
async def receive_fan_data(data: FanData):
    # Aqui você pode salvar no banco, validar, etc.
    print("🧾 Dados recebidos do frontend:")
    print(data.dict())

    # Retornar resposta simulando um ID de registro
    return {"message": "Dados recebidos com sucesso!", "id": 1234}
