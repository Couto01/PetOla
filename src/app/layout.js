import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Footer from 'next/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PetOla - A página web para adoção de pets',
  description: 'PetOla é uma página web que te ajuda a encontrar e adotar um pet que precisa de um lar',
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
      <Footer>
        <p>© 2023 PetOla. Todos os direitos reservados.</p>
        <p>Contato: petola@gmail.com</p>
        <p>Siga-nos nas redes sociais:</p>
        <ul>
          <li><a href="https://www.facebook.com/petola">Facebook</a></li>
          <li><a href="https://www.instagram.com/petola">Instagram</a></li>
          <li><a href="https://www.twitter.com/petola">Twitter</a></li>
        </ul>
      </Footer>
    </html>
  )
}
