from pydantic import BaseModel
from typing import List, Optional

class FanData(BaseModel):
    nome: str
    cpf: str
    endereco: str
    jogosFavoritos: List[str]
    eventos: Optional[str]
    comprovante: Optional[str]
    instagram: Optional[str]
    twitter: Optional[str]
    linkPerfil: Optional[str]
