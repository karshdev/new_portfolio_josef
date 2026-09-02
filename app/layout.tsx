import "./globals.css";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeProvider from "@/context/theme-context";

export const metadata = {
  title: "Josef Al-Masri — Fullstack developer · Co-founder & CTO, Viafocus",
  description:
    "Fullstack developer who builds products people actually use. Co-founder & CTO of Viafocus, an ALMI-backed EdTech SaaS live in a Swedish school. Node.js, React, TypeScript, PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "var(--ink)",
                  color: "var(--paper)",
                  borderRadius: "6px",
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                },
              }}
            />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
