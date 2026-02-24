"use client";

import { motion } from "framer-motion";
import { ActivitySquare, FileText, Heart, HelpCircle, LayoutDashboard, MessageSquare, Settings, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", path: "/", icon: LayoutDashboard },
        { name: "Diabetes Risk", path: "/diabetes", icon: ActivitySquare },
        { name: "Cardio Risk", path: "/heart", icon: Heart },
        { name: "AI Assistant", path: "/ask-ai", icon: MessageSquare },
        { name: "Reports History", path: "/reports", icon: FileText },
    ];

    return (
        <aside className="w-64 flex-shrink-0 hidden lg:flex flex-col h-[calc(100vh-4rem)] sticky top-16 bg-white border-r border-slate-100 pt-8 pb-4">
            <div className="px-6 mb-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Core Modules</h3>
                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative ${isActive ? "text-blue-700 bg-blue-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-indicator"
                                        className="absolute left-0 top-1 bottom-1 w-1 bg-blue-600 rounded-r-full"
                                    />
                                )}
                                <Icon size={20} className={isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="px-6 mt-auto">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Settings</h3>
                <nav className="space-y-1">
                    <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-50 transition-all">
                        <Settings size={20} className="text-slate-400" /> Options
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-50 transition-all">
                        <HelpCircle size={20} className="text-slate-400" /> Support
                    </Link>
                </nav>

                {/* Cleaner Ad Module */}
                <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100/50">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                        <Zap size={16} />
                    </div>
                    <div className="text-sm font-bold text-blue-900 mb-1">HealthGuard Pro</div>
                    <p className="text-xs text-blue-700/80 mb-4 leading-relaxed">Get unlimited API calls and priority model inference.</p>
                    <button className="w-full py-2.5 bg-white text-blue-700 hover:bg-blue-50 border border-blue-200 text-xs font-bold rounded-xl shadow-sm transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </aside>
    );
}
