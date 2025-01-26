import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポケモンおみくじ",
  description:
    "運命のポケモンと出会い、日常をヒントを得ましょう！ボタンを押すと、あなたの運勢が表示されます！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="bg-red-50">
      <body className={cn("min-h-screen", inter.className)}>
        <main className="bg-gradient-to-b from-red-50 to-white">
          <div className="container mx-auto p-4">{children}</div>
        </main>

        <footer className="text-center">
          <p className="text-gray-400">
            Pokemon Omikuji | Created by{" "}
            <a className="underline" href="https://github.com/MasakiAraki" target="_blank">
              @MasakiAraki
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}