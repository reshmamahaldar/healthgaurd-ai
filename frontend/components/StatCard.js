"use client";

import { motion } from "framer-motion";

export default function StatCard({ title, value, icon: Icon, trend }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-6 transition-all duration-300"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600">
                    {Icon && <Icon size={24} />}
                </div>
                {trend && (
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${trend.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {trend.value}
                    </span>
                )}
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
            <div className="text-3xl font-bold text-slate-900">{value}</div>
        </motion.div>
    );
}
