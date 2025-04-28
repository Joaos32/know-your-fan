from fastapi.testclient import TestClient
from app.main import app
import os
from dotenv import load_dotenv

load_dotenv(".env.test")  # carregando configuração de teste

import pytest

@pytest.fixture(scope="module")
def client():
    with TestClient(app) as c:
        yield c
