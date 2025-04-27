from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.ocr_service import extract_text_from_file
from app.utils.file_handler import save_upload_file
from app.models.user import User
from app.core.security import get_current_user
from fastapi import status


ALLOWED_CONTENT_TYPES = {"image/jpeg", "image/png", "application/pdf"}

router = APIRouter()

@router.post("/doc")
async def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if file.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"Tipo de arquivo '{file.content_type}' não permitido. Aceitos: JPEG, PNG ou PDF."
        )

    file_path = await save_upload_file(file)
    extracted_text = extract_text_from_file(file_path)

    if current_user.name.split()[0].lower() not in extracted_text.lower():
        raise HTTPException(status_code=400, detail="Validação do documento falhou.")

    return {"message": "Documento enviado e validado com sucesso!"}