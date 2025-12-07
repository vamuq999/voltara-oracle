import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "VOLTARA",
  description: "VOLTARA Hub – unified interface for the Voltara ecosystem.",
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
          {/* PAGE SHELL */}
          <div className="relative min-h-screen flex flex-col overflow-hidden">
            {/* TOP NAV BAR */}
            <header className="border-b border-slate-800/40 bg-slate-950/80 backdrop-blur-md">
              <nav className="mx-auto flex max-w-5xl items-center justify-center py-4 text-sm font-medium text-slate-200">
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition flex items-center gap-1"
                >
                  <span className="tracking-[0.3em] text-xs md:text-sm uppercase">
                    VOLT
                    <span className="text-[#0ff] drop-shadow-[0_0_8px_#0ff]">A</span>
                    RA
                  </span>
                </Link>
              </nav>
            </header>

            {/* ORACLE ORB BACKGROUND */}
            <div
              className="
                pointer-events-none
                absolute
                -top-40
                right-[-14rem]
                h-[28rem]
                w-[28rem]
                rounded-full
                bg-[#00faff]
                opacity-40
                blur-3xl
              "
            />
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-10rem]
                left-[-12rem]
                h-[22rem]
                w-[22rem]
                rounded-full
                bg-[#00e5ff]
                opacity-20
                blur-3xl
              "
            />

                        {/* NOVA WATERMARK */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                flex items-center justify-center
                text-[8rem] md:text-[11rem]
                font-extrabold tracking-[1.2rem]
                text-slate-700
                opacity-25
                select-none
              "
            >
              <span className="relative inline-flex items-center justify-center">
    {/* Glowing ΛI text */}
    <span
      className="
        relative z-10
        tracking-[1.2rem]
        blur-[0.5px]
        text-[#0ff]
        drop-shadow-[0_0_22px_#0ff]
      "
    >
      ΛI
    </span>

    {/* Rotating double-layer core behind ΛI */}
    <span className="lamda-core-wrapper">
      <span className="lamda-core-glow" />
      <span className="lamda-core-ring" />
    </span>
  </span>




            </div>


            {/* MAIN PAGE CONTENT */}
            <main className="flex-1">
              {children}
            </main>

            {/* FOOTER */}
            <footer className="border-t border-slate-900/60 bg-slate-950/90 py-3 text-center text-[11px] text-slate-500">
              VOLTARA System • Voltara Labs
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
