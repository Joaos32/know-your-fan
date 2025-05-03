# 🎮 Know Your Fan

**Know Your Fan** é uma aplicação fullstack desenvolvida como parte do *Challenge #2* com o objetivo de coletar e analisar dados de fãs de eSports — especialmente da FURIA. A solução permite que usuários compartilhem informações pessoais, sociais e de interesse para experiências personalizadas.

---

## 🚀 Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Mantine UI](https://mantine.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [jspdf + html2canvas](https://github.com/parallax/jsPDF)

### Backend
- [FastAPI](https://fastapi.tiangolo.com/)
- [SQLAlchemy](https://www.sqlalchemy.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Uvicorn](https://www.uvicorn.org/)

---

## 📁 Estrutura do Projeto

```
know-your-fan/
├── backend/          # API FastAPI
│   ├── app/          # Código da aplicação (routers, models, schemas)
│   ├── main.py       # Inicialização da API
│   └── requirements.txt
└── frontend/         # Frontend em React + Vite + Mantine
    ├── src/
    └── vite.config.js
```

---

## ⚙️ Como Executar

### Pré-requisitos
- Python 3.10+
- Node.js 18+
- PostgreSQL em execução

### 1. Clonar o repositório

```bash
git clone https://github.com/Joaos32/know-your-fan.git
cd know-your-fan
```

---

## 🧠 Backend (FastAPI)

### 1. Criar e ativar ambiente virtual

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # No Windows
# source venv/bin/activate  # macOS/Linux
```

### 2. Instalar dependências

```bash
pip install -r requirements.txt
```

### 3. Criar o banco de dados PostgreSQL

Crie um banco chamado `know_your_fan` no PostgreSQL e configure o `.env` ou a URL de conexão em `core/database.py`.

### 4. Rodar a API

```bash
uvicorn app.main:app --reload
```

- API: [http://localhost:8000](http://localhost:8000)
- Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 💻 Frontend (Vite + React)

### 1. Instalar dependências

```bash
cd ../frontend
npm install
```

### 2. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

- App: [http://localhost:5173](http://localhost:5173)

---

## ✅ Funcionalidades

- Cadastro de fãs com:
  - Nome, CPF, endereço
  - Jogos favoritos
  - Eventos e produtos adquiridos
  - Upload de RG ou CNH
  - Links de redes sociais e perfil de eSports

- Animações com Framer Motion
- Geração de PDF com os dados do fã
- Exibição visual do comprovante (imagem/PDF)
- API REST integrada

---

## 📌 To-Do / Melhorias Futuras

- Autenticação com JWT
- Armazenamento de arquivos em S3
- Análise de dados com IA
- Painel de administração

---

## 🧑‍💻 Desenvolvido por

João Vitor Silva Santos  
[GitHub](https://github.com/Joaos32)

📅 Última atualização: 03/05/2025
