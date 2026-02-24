import { Loader2 } from "lucide-react";

export default function Loader({ text = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center p-8 space-y-4">
            <div className="relative">
                <div className="absolute inset-0 rounded-full blur-md bg-blue-400 opacity-50 animate-pulse"></div>
                <Loader2 size={40} className="relative text-blue-600 animate-spin" />
            </div>
            <p className="text-slate-500 font-medium animate-pulse">{text}</p>
        </div>
    );
}
