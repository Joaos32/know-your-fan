from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.fan import FanData
from app.models.fan import Fan
from app.core.database import get_db
from typing import List
from app.schemas.fan import FanData

router = APIRouter()

@router.post("/submit")
def create_fan(data: FanData, db: Session = Depends(get_db)):
    fan = Fan(
        nome=data.nome,
        cpf=data.cpf,
        endereco=data.endereco,
        jogos_favoritos=data.jogosFavoritos,
        eventos=data.eventos,
        comprovante=data.comprovante,
        instagram=data.instagram,
        twitter=data.twitter,
        link_perfil=data.linkPerfil,
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