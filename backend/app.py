from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "HealthGuard AI Backend Running"}