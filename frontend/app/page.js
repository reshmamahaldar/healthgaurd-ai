"use client";

import { motion } from "framer-motion";
import { ActivitySquare, ArrowRight, FileText, Heart, MessageSquare, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full pb-12 bg-white">
      {/* Cleaner, Simpler Hero Section */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Soft, minimal background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-8"
          >
            <ShieldCheck size={16} className="text-blue-600" />
            <span>Secure & Private Health Analytics</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
          >
            Predictive Healthcare <br />
            <span className="text-blue-600">Powered by AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            Assess risks for diabetes and cardiovascular diseases instantly using our secure, clinical-grade machine learning models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center"
          >
            <Link
              href="/diabetes"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-md flex items-center justify-center gap-2"
            >
              Start Screening <ArrowRight size={20} />
            </Link>
            <Link
              href="/ask-ai"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} className="text-blue-600" /> Ask AI Assistant
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mt-12">
        {/* Simple Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Diagnostic Modules</h2>
            <p className="text-slate-500 mt-2 text-lg">Select an assessment to begin.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Diabetes Risk Detection"
              description="Analyze clinical biomarkers including glucose, BMI, and insulin to accurately determine diabetes probabilities."
              icon={ActivitySquare}
              href="/diabetes"
              colorClass="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Cardiovascular Assessment"
              description="Evaluate lipid profiles, angina history, and blood pressure dynamics to map precise cardiovascular event risks."
              icon={Heart}
              href="/heart"
              colorClass="bg-rose-50 text-rose-600"
            />
            <FeatureCard
              title="Conversational AI Insights"
              description="Interact with our secure LLM to break down complex medical reports into easily understandable health advice."
              icon={MessageSquare}
              href="/ask-ai"
              colorClass="bg-teal-50 text-teal-600"
            />
          </div>
        </div>

        {/* Quick Access to Reports */}
        <div className="bg-slate-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="text-blue-600" size={24} /> Review Past Assessments
            </h3>
            <p className="text-slate-600 mt-1">Access your patient history and previous diagnostic reports securely.</p>
          </div>
          <Link href="/reports" className="px-6 py-3 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 text-blue-700 rounded-xl font-semibold transition-colors flex items-center gap-2 whitespace-nowrap">
            View Reports <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon: Icon, href, colorClass }) {
  return (
    <Link href={href} className="group block h-full">
      <div className="bg-white rounded-2xl p-8 h-full border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg relative flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
          <Icon size={32} />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </Link>
  );
}