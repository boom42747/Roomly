import "./globals.css";

export const metadata = {
  title: "Habita",
  description: "ค้นหาอสังหาริมทรัพย์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}