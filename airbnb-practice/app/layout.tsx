import { Nunito } from "next/font/google";

//metadata is reservered
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Practice',
}

const font = Nunito({
  subsets: ["latin"],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
