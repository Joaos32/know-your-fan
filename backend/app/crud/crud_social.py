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

def get_social_account(db: Session, social_id: int):
    return db.query(SocialAccount).filter(SocialAccount.id == social_id).first()

def update_social_account(db: Session, social_id: int, account: SocialAccountCreate):
    db_account = db.query(SocialAccount).filter(SocialAccount.id == social_id).first()
    if db_account:
        for key, value in account.dict().items():
            setattr(db_account, key, value)
        db.commit()
        db.refresh(db_account)
    return db_account

def delete_social_account(db: Session, social_id: int):
    db_account = db.query(SocialAccount).filter(SocialAccount.id == social_id).first()
    if db_account:
        db.delete(db_account)
        db.commit()
    return db_account
