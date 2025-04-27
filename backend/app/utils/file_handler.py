import shutil
import os
from fastapi import UploadFile

UPLOAD_DIRECTORY = "uploads"

async def save_upload_file(upload_file: UploadFile) -> str:
    if not os.path.exists(UPLOAD_DIRECTORY):
        os.makedirs(UPLOAD_DIRECTORY)

    file_location = os.path.join(UPLOAD_DIRECTORY, upload_file.filename)

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)

    return file_location
