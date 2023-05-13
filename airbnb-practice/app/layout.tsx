import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';

//metadata is reserved
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb practice project next.js react, ',
}

const font = Nunito({
  subsets: ["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
        <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

//the ClientOnly we created, will wrap all components, that deal with client only to prevent hydration
