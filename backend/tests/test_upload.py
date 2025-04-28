import io

def test_upload_document_without_token(client):
    file_content = io.BytesIO(b"fake file content")
    files = {"file": ("test.pdf", file_content, "application/pdf")}
    response = client.post("/upload/doc", files=files)
    assert response.status_code == 401  # Token obrigatório
