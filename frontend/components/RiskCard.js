export default function RiskCard({ title, description, icon: Icon, href, actionText }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 flex flex-col h-full">
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                {Icon && <Icon size={24} />}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                {description}
            </p>
            {href && actionText && (
                <a
                    href={href}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                    {actionText}
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </a>
            )}
        </div>
    );
}
