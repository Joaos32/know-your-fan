import pytesseract
from PIL import Image
import pdf2image

def extract_text_from_file(file_path: str) -> str:
    if file_path.lower().endswith(".pdf"):
        images = pdf2image.convert_from_path(file_path)
        text = ""
        for image in images:
            text += pytesseract.image_to_string(image)  # acumula o texto corretamente
        return text
    else:
        image = Image.open(file_path)
        return pytesseract.image_to_string(image)
