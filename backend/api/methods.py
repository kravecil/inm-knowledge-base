import httpx
from config import BASE_URL

def api_get(uri: str):
    response = httpx.get(f"{BASE_URL}{uri}")
    return response.json()