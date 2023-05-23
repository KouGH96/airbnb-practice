import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

//metadata is reserved
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb practice project next.js react, ',
}

const font = Nunito({
  subsets: ["latin"]
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

//the ClientOnly we created, will wrap all components, that deal with client only to prevent hydration
