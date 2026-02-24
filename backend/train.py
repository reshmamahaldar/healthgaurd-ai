import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

os.makedirs("models", exist_ok=True)

# --------------------
# Diabetes Model
# --------------------
df = pd.read_csv("data/diabetes.csv")

X = df.drop("Outcome", axis=1)
y = df["Outcome"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

diabetes_model = RandomForestClassifier()
diabetes_model.fit(X_train, y_train)

joblib.dump(diabetes_model, "models/diabetes_model.pkl")

# --------------------
# Heart Model
# --------------------
df_heart = pd.read_csv("data/heart.csv")

Xh = df_heart.drop("target", axis=1)
yh = df_heart["target"]

Xh_train, Xh_test, yh_train, yh_test = train_test_split(
    Xh, yh, test_size=0.2, random_state=42
)

heart_model = RandomForestClassifier()
heart_model.fit(Xh_train, yh_train)

joblib.dump(heart_model, "models/heart_model.pkl")

print("Models trained and saved successfully.")