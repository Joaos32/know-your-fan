import os
import json
from uuid import uuid4
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import List
from app.models.fan import Fan
from app.schemas.fan import FanData
from app.core.database import get_db

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

router = APIRouter()

@router.post("/submit")
async def create_fan(
    nome: str = Form(...),
    cpf: str = Form(...),
    endereco: str = Form(...),
    jogosFavoritos: str = Form(...),
    eventos: str = Form(...),
    instagram: str = Form(...),
    twitter: str = Form(...),
    linkPerfil: str = Form(...),
    comprovante: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    try:
        jogos_list = json.loads(jogosFavoritos)
    except Exception:
        raise HTTPException(status_code=400, detail="Erro ao decodificar jogosFavoritos")

    # Salva o arquivo do comprovante
    filename = f"{uuid4().hex}_{comprovante.filename}"
    file_path = os.path.join(UPLOAD_DIR, filename)

    with open(file_path, "wb") as buffer:
        buffer.write(await comprovante.read())

    fan = Fan(
        nome=nome,
        cpf=cpf,
        endereco=endereco,
        jogos_favoritos=jogos_list,
        eventos=eventos,
        comprovante=filename,
        instagram=instagram,
        twitter=twitter,
        link_perfil=linkPerfil
    )
    db.add(fan)
    db.commit()
    db.refresh(fan)

    return {"message": "Dados do fã salvos com sucesso!", "id": fan.id}


@router.get("/{fan_id}", response_model=FanData)
def get_fan(fan_id: int, db: Session = Depends(get_db)):
    fan = db.query(Fan).filter(Fan.id == fan_id).first()
    if not fan:
        raise HTTPException(status_code=404, detail="Fã não encontrado")

    return FanData(
        nome=fan.nome,
        cpf=fan.cpf,
        endereco=fan.endereco,
        jogosFavoritos=fan.jogos_favoritos,
        eventos=fan.eventos,
        comprovante=fan.comprovante,
        instagram=fan.instagram,
        twitter=fan.twitter,
        linkPerfil=fan.link_perfil
    )


@router.get("/", response_model=List[FanData])
def list_all_fans(db: Session = Depends(get_db)):
    fans = db.query(Fan).all()
    return [
        FanData(
            nome=fan.nome,
            cpf=fan.cpf,
            endereco=fan.endereco,
            jogosFavoritos=fan.jogos_favoritos,
            eventos=fan.eventos,
            comprovante=fan.comprovante,
            instagram=fan.instagram,
            twitter=fan.twitter,
            linkPerfil=fan.link_perfil
        )
        for fan in fans
    ]
