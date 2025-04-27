from app.models.social_account import SocialAccount

def analyze_social_accounts(accounts: list[SocialAccount]) -> dict:
    if not accounts:
        return {"message": "Nenhuma rede social conectada", "presence_score": 0}

    platforms = [account.provider for account in accounts]
    score = min(len(platforms) * 20, 100)  # Cada conta dá 20 pontos, até o máximo de 100.

    return {
        "connected_platforms": platforms,
        "presence_score": score,
        "analysis": f"Usuário conectado a {len(platforms)} plataformas sociais."
    }
