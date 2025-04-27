import os
from fastapi import UploadFile
from uuid import uuid4

UPLOAD_DIR = "uploads"

async def save_upload_file(upload_file: UploadFile) -> str:
    if not os.path.exists(UPLOAD_DIR):
        os.makedirs(UPLOAD_DIR)

    file_ext = upload_file.filename.split(".")[-1]
    file_path = os.path.join(UPLOAD_DIR, f"{uuid4()}.{file_ext}")

    with open(file_path, "wb") as buffer:
        buffer.write(await upload_file.read())

    return file_path