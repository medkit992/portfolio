import type { Metadata } from "next";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";

export const metadata: Metadata = {
  title: "Portfolio-Andrew Gomes",
  description: "A portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

