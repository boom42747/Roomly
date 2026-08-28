import './globals.css'

export const metadata = {
  title: 'Roomly — ค้นหาบ้านและคอนโด',
  description:
    'ค้นหาบ้าน คอนโด และที่พักที่เข้ากับชีวิตคุณ',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}