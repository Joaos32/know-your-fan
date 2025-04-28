import uuid

def test_create_user(client):
    unique_email = f"test_{uuid.uuid4()}@example.com"
    user_data = {
        "name": "Test User",
        "email": unique_email,
        "password": "testpassword"
    }
    response = client.post("/users/", json=user_data)
    assert response.status_code == 200
