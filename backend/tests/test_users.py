def test_create_user(client):
    user_data = {
        "name": "Test User",
        "email": "test_new3@example.com",
        "password": "testpassword"
    }
    response = client.post("/users/", json=user_data)
    assert response.status_code == 200
    assert response.json()["email"] == user_data["email"]

def test_list_users(client):
    response = client.get("/users/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
