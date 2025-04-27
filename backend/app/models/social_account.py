from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class SocialAccount(Base):
    __tablename__ = "social_accounts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    provider = Column(String, nullable=False)  # exemplo: instagram, twitter, twitch
    access_token = Column(String, nullable=False)
    username = Column(String, nullable=True)
    profile_url = Column(String, nullable=True)
