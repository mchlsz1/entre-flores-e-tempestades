import "./globals.css";

export const metadata = {
  title: "Entre Flores e Tempestades",
  description: "Um jardim de reflexões, sentimentos e descobertas."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
