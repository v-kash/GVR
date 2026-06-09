import "./globals.css";
import { Libre_Baskerville } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const libre = Libre_Baskerville({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "GVR Fresh Foods Pvt Ltd",
  description:
    "Traders and producers of fresh eggs in 7 variants and all types of dry fish.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${libre.variable} h-full antialiased`}
    >
       {/* <ScrollToTop />  */}
      <body className="min-h-full bg-[#f8f4ee] text-[#3e2f26] font-[family-name:var(--font-main)]">
        {children}
      </body>
    </html>
  );
}