import Header from '@/ui/header'
import './globals.scss'
import { Montserrat } from 'next/font/google'
import { Metadata } from 'next'
import { StyledEngineProvider } from '@mui/material'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledEngineProvider injectFirst>
      <html lang="en">
        <body className={montserrat.className} id='root'>
          <link rel="apple-touch-icon" sizes="180x180" href="./../public/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./../public/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./../public/favicon/favicon-16x16.png" />
          <link rel="manifest" href="./../public/favicon/site.webmanifest" />
          <Header />
          {children}
        </body>
      </html>
    </StyledEngineProvider>
  )
}
