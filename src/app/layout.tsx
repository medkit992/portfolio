import type { Metadata } from "next";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";

export const metadata: Metadata = {
  title: "Andrew Gomes | Full-Stack Software Developer",
  description:
    "Portfolio of Andrew Gomes, a full-stack software developer building web applications, developer tools, APIs, integrations, and automation.",
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
