"use client";

import { motion } from "framer-motion";

export default function RiskGauge({ percentage, level, colorClass, size = 200 }) {
    const strokeWidth = 16;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Extract base color from tailwind class string simple approximation
    const getStrokeColor = () => {
        if (colorClass.includes("red")) return "#ef4444";
        if (colorClass.includes("yellow")) return "#eab308";
        if (colorClass.includes("green") || colorClass.includes("health")) return "#22c55e";
        return "#3b82f6";
    };

    return (
        <div className="flex flex-col items-center justify-center relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth={strokeWidth}
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke={getStrokeColor()}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-5xl font-bold text-slate-900 tracking-tighter"
                >
                    {percentage}%
                </motion.span>
                <span className={`text-sm font-bold uppercase tracking-wider mt-1 ${colorClass.split(' ')[0]}`}>
                    {level}
                </span>
            </div>
        </div>
    );
}
