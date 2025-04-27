from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.ocr_service import extract_text_from_file
from app.utils.file_handler import save_upload_file
from app.models.user import User
from app.core.security import get_current_user

router = APIRouter()

@router.post("/doc")
async def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if file.content_type not in ["image/jpeg", "image/png", "application/pdf"]:
        raise HTTPException(status_code=400, detail="File must be an image or PDF.")

    file_path = await save_upload_file(file)

    extracted_text = extract_text_from_file(file_path)

    # Validação básica
    if current_user.name.split()[0].lower() not in extracted_text.lower():
        raise HTTPException(status_code=400, detail="Document validation failed.")

    return {"message": "Document uploaded and validated successfully"}
