def test_login_invalid_credentials(client):
    response = client.post("/auth/login", data={"username": "wrong", "password": "wrong"})
    assert response.status_code == 401
    assert response.json()["detail"] == "Credenciais inválidas"
