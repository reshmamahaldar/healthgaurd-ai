from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()

diabetes_model = joblib.load("models/diabetes_model.pkl")
heart_model = joblib.load("models/heart_model.pkl")

class DiabetesInput(BaseModel):
    data: list

class HeartInput(BaseModel):
    data: list

@app.post("/predict/diabetes")
def predict_diabetes(input: DiabetesInput):
    prediction = diabetes_model.predict([input.data])
    risk = diabetes_model.predict_proba([input.data])[:,1]

    return {
        "prediction": int(prediction[0]),
        "risk_percentage": float(risk[0] * 100)
    }

@app.post("/predict/heart")
def predict_heart(input: HeartInput):
    prediction = heart_model.predict([input.data])
    risk = heart_model.predict_proba([input.data])[:,1]

    return {
        "prediction": int(prediction[0]),
        "risk_percentage": float(risk[0] * 100)
    }