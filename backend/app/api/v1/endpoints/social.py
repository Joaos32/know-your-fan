from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import get_current_user
from app.models.user import User
from app.schemas.social_account import SocialAccountCreate, SocialAccountOut
from app.crud.crud_social import create_social_account, get_user_social_accounts

router = APIRouter()

@router.post("/connect", response_model=SocialAccountOut)
def connect_social_account(
    account_in: SocialAccountCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    account = create_social_account(db, current_user.id, account_in)
    return account

@router.get("/me", response_model=list[SocialAccountOut])
def get_my_social_accounts(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    accounts = get_user_social_accounts(db, current_user.id)
    return accounts
