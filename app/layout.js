'use client'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );

}