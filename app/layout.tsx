import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Voltara",
  description: "Voltara Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Providers>
          <nav className="w-full border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 py-4 flex gap-6 text-sm">
              <a href="/" className="hover:text-emerald-300">Home</a>
              <a href="/oracle" className="hover:text-emerald-300">Oracle</a>
              <a href="/mint" className="hover:text-emerald-300">Mint</a>
              <a href="/truthlens" className="hover:text-emerald-300">TruthLens</a>
              <a href="/nodearmy" className="hover:text-emerald-300">Node Army</a>
            </div>
          </nav>

          <main className="pt-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
