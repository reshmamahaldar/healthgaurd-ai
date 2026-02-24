"use client";

import { motion } from "framer-motion";

export function PredictionForm({ title, subtitle, icon: Icon, children }) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
            >
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    {Icon && <Icon size={36} />}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">{title}</h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            </motion.div>

            {children}
        </div>
    );
}

export function FloatingInput({ label, name, value, onChange, type = "text", placeholder, step }) {
    return (
        <div className="relative z-0 w-full mb-6 group">
            <input
                type={type}
                name={name}
                id={name}
                className="block py-3 px-4 w-full text-base text-slate-900 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all peer"
                placeholder={placeholder || " "}
                required
                value={value}
                onChange={onChange}
                step={step}
            />
            <label
                htmlFor={name}
                className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-placeholder-shown:left-4 left-4 bg-slate-50 peer-focus:bg-white px-1 rounded transition-all"
            >
                {label}
            </label>
        </div>
    );
}
