from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.dialects.postgresql import ARRAY
from app.core.database import Base

class Fan(Base):
    __tablename__ = "fans"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    cpf = Column(String, nullable=False, unique=True)
    endereco = Column(String, nullable=False)
    jogos_favoritos = Column(ARRAY(String), nullable=False)
    eventos = Column(Text, nullable=True)
    comprovante = Column(String, nullable=True)
    instagram = Column(String, nullable=True)
    twitter = Column(String, nullable=True)
    link_perfil = Column(String, nullable=True)
