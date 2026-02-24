import ChatBox from "@/components/ChatBox";

export default function AskAIPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-12 px-4">
            <div className="max-w-4xl mx-auto mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Ask Medical AI
                </h1>
                <p className="text-slate-600 text-lg">
                    Get fast, reliable insights on health conditions, risk factors, and preventative care.
                </p>
            </div>

            <ChatBox />
        </div>
    );
}
