import Header from '@/ui/header'
import './globals.scss'
import { Montserrat } from 'next/font/google'
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
          <meta name="google-site-verification" content="2bco0LV7y4a5e4a_swVe81p-di_E3EGC49h3OvMjp0I" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <Header />
          {children}
        </body>
      </html>
    </StyledEngineProvider>
  )
}
