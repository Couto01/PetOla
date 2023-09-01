import Footer from '@/components/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PetOla - A página web para adoção de pets',
  description: 'PetOla, te ajuda a encontrar e adotar um pet que precisa de um lar',
  favicon: '/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.favicon} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
