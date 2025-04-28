from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import get_current_user
from app.crud import crud_social as social_crud
from app.crud.crud_social import get_user_social_accounts
from app.models.user import User
from app.schemas.social_account import SocialAccountCreate, SocialAccountOut
from app.services.social_analysis_service import analyze_social_accounts

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

@router.post("/", response_model=SocialAccountOut)
def create_social_account(
    social: SocialAccountCreate, 
    db: Session = Depends(get_db)
):
    return social_crud.create_social_account(db, social)

@router.get("/", response_model=list[SocialAccountOut])
def list_social_accounts(
    skip: int = 0, 
    limit: int = 100, 
    db: Session = Depends(get_db)
):
    return social_crud.get_social_accounts(db, skip=skip, limit=limit)

@router.get("/{social_id}", response_model=SocialAccountOut)
def read_social_account(
    social_id: int, 
    db: Session = Depends(get_db)
):
    db_social = social_crud.get_social_account(db, social_id)
    if not db_social:
        raise HTTPException(status_code=404, detail="Social account not found")
    return db_social

@router.get("/analysis")
def analyze_my_social_accounts(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
) -> dict:
    accounts = get_user_social_accounts(db, current_user.id)
    analysis = analyze_social_accounts(accounts)
    return analysis

@router.get("/social/me")
def get_social_accounts(
    current_user: User = Depends(get_current_user)
):
    return {"message": f"Social accounts for {current_user.email}"}

@router.put("/{social_id}", response_model=SocialAccountOut)
def update_social_account(
    social_id: int, 
    social: SocialAccountCreate, 
    db: Session = Depends(get_db)
):
    updated_social = social_crud.update_social_account(db, social_id, social)
    if not updated_social:
        raise HTTPException(status_code=404, detail="Social account not found")
    return updated_social

@router.delete("/{social_id}", response_model=SocialAccountOut)
def delete_social_account(
    social_id: int, 
    db: Session = Depends(get_db)
):
    deleted_social = social_crud.delete_social_account(db, social_id)
    if not deleted_social:
        raise HTTPException(status_code=404, detail="Social account not found")
    return deleted_social
