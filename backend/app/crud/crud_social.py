from sqlalchemy.orm import Session
from app.models.social_account import SocialAccount
from app.schemas.social_account import SocialAccountCreate

def create_social_account(db: Session, user_id: int, account: SocialAccountCreate):
    db_account = SocialAccount(
        user_id=user_id,
        provider=account.provider,
        access_token=account.access_token,
        username=account.username,
        profile_url=account.profile_url
    )
    db.add(db_account)
    db.commit()
    db.refresh(db_account)
    return db_account

def get_user_social_accounts(db: Session, user_id: int):
    return db.query(SocialAccount).filter(SocialAccount.user_id == user_id).all()
