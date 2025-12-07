// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Link from "next/link";
import StatusOrb from "./components/StatusOrb";

export const metadata = {
  title: "VOLT(A)RA",
  description: "The Voltara Hub – Gateway to the Oracle, Node Army, and VX systems."
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col">
            {/* TOP NAV BAR */}
            <header className="border-b border-slate-800/40 bg-slate-950/80 backdrop-blur-md shadow-[0_1px_20px_rgba(34,211,238,0.08)]">
              <nav
                className="
                  mx-auto flex max-w-5xl items-center justify-center gap-8
                  py-4 text-sm font-medium text-slate-200
                  transition hover:shadow-[0_2px_25px_rgba(34,211,238,0.16)]
                "
              >
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>

                <Link
                  href="/oracle"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Oracle
                </Link>

      

                <Link
                  href="/node-army"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Node Army
                </Link>
              </nav>
            </header>

            {/* MAIN APP CONTENT */}
            <main className="flex-1 pt-6">{children}</main>
            <StatusOrb />

            {/* FOOTER (SUBTLE, OPTIONAL) */}
            <footer className="border-t border-slate-900/60 bg-slate-950/90 py-3 text-center text-[11px] text-slate-500">
              VoltaAra System • Voltara Labs
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
