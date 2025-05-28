import httpx

from config import AUTH_PASSWORD, AUTH_USERNAME, BASE_URL

AUTH = (AUTH_USERNAME, AUTH_PASSWORD)


def api_get(uri: str):
    response = httpx.get(f"{BASE_URL}{uri}", auth=AUTH, timeout=10.0)
    return response.json()
