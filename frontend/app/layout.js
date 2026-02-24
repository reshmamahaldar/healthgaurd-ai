import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "HealthGuard AI | Disease Risk Prediction",
  description: "AI-Powered Disease Risk Prediction for Diabetes and Heart Disease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
            <Sidebar />
            <main className="flex-1 w-full overflow-hidden">
              <div className="h-full overflow-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
