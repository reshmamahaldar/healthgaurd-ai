"use client";

import { motion } from "framer-motion";
import { ActivitySquare, ChevronRight, Database, Download, FileText, Filter, Heart, Search } from "lucide-react";

// Empty history data as requested
const reportHistory = [];

export default function ReportsPage() {
    const getBadgeClass = (color) => {
        const map = {
            yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
            green: "bg-green-100 text-green-800 border-green-200",
            red: "bg-red-100 text-red-800 border-red-200"
        };
        return map[color] || "bg-slate-100 text-slate-800 border-slate-200";
    };

    const getIcon = (type) => {
        return type === 'Diabetes' ? <ActivitySquare size={16} className="mr-2 text-blue-500" /> : <Heart size={16} className="mr-2 text-rose-500" />;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Diagnostic Reports</h1>
                    <p className="text-slate-500 mt-1">Review historical risk assessments and patient models.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative w-full sm:w-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search ID or Patient..."
                            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                        />
                    </div>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-medium transition-colors shadow-sm">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-500/20">
                        <Download size={16} /> Export PDF
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                                <th className="px-6 py-4">Report ID</th>
                                <th className="px-6 py-4">Date generated</th>
                                <th className="px-6 py-4">Assessment Type</th>
                                <th className="px-6 py-4">Patient Ref</th>
                                <th className="px-6 py-4">Analyzed Risk</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            {reportHistory.length > 0 ? (
                                reportHistory.map((report) => (
                                    <tr key={report.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                                        <td className="px-6 py-5 whitespace-nowrap font-medium text-slate-900 flex items-center gap-2">
                                            <FileText size={16} className="text-slate-400" /> {report.id}
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-slate-500">{report.date}</td>
                                        <td className="px-6 py-5 whitespace-nowrap flex items-center font-medium text-slate-700">
                                            {getIcon(report.type)} {report.type}
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap font-mono text-slate-500 text-xs bg-slate-100 rounded px-2 py-1 mx-2 w-max inline-block mt-4">{report.patient}</td>
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getBadgeClass(report.color)}`}>
                                                    {report.result}
                                                </span>
                                                <span className="font-bold text-slate-700">{report.riskVal}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-right">
                                            <button className="text-blue-600 font-medium hover:text-blue-800 text-sm inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                View Details <ChevronRight size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center justify-center text-slate-500">
                                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                                <Database size={32} className="text-slate-400" />
                                            </div>
                                            <p className="text-lg font-medium text-slate-900 mb-1">No reports found</p>
                                            <p className="text-sm">You haven't generated any diagnostic assessments yet.</p>
                                            <button className="mt-6 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-semibold transition-colors">
                                                Run New Assessment
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Simplified Pagination */}
                {reportHistory.length > 0 && (
                    <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between">
                        <span className="text-sm text-slate-500 font-medium">Showing 1 to {reportHistory.length} of {reportHistory.length} reports</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-400 cursor-not-allowed text-sm font-medium">Previous</button>
                            <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-400 cursor-not-allowed text-sm font-medium">Next</button>
                        </div>
                    </div>
                )}
            </motion.div>

        </div>
    );
}
