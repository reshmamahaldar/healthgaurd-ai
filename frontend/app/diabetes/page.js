"use client"

import { useState } from "react"
import axios from "axios"

export default function Diabetes() {
  const [risk, setRisk] = useState(null)

  const handlePredict = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict/diabetes",
        {
          data: [2,120,70,20,85,28.5,0.5,35]
        }
      )
      setRisk(response.data.risk_percentage)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-3xl font-bold mb-6">Diabetes Risk Prediction</h1>

      <button
        onClick={handlePredict}
        className="px-6 py-3 bg-green-600 text-white rounded-lg"
      >
        Predict Risk
      </button>

      {risk && (
        <p className="mt-4 text-xl">
          Risk Percentage: {risk.toFixed(2)}%
        </p>
      )}
    </div>
  )
}