'use client'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeWrapper from './context/theme'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeWrapper> 
          <Header />
          <main> {children} </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );

}