import React from 'react'
import Link from 'next/link'

// Cria um componente funcional Footer
function Footer() {
  // Retorna o JSX do footer
  return (
    // Cria um elemento footer com classes de estilo
    <footer className="bg-violet-800 p-4 text-lime-400">
      // Cria um container para o conteúdo do footer
      <div className="container flex flex-col items-center justify-between mx-auto">
        // Cria uma seção para o nome do site
        <div className="site-name">
          <h1>PetOla</h1>
          <p>A página web para adoção de pets</p>
        </div>
        // Cria uma seção para os contatos
        <div className="contacts">
          <h2>Contatos</h2>
          <p>Email: petola@gmail.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        // Cria uma seção para os links das redes sociais
        <div className="social-links">
          <h2>Siga-nos nas redes sociais:</h2>
          <ul className="flex flex-row space-x-4">
            // Cria um link para o Facebook usando o componente Link do Next
            <li>
              <Link href="https://www.facebook.com/petola">
                <a target="_blank" rel="noopener noreferrer">Facebook</a>
              </Link>
            </li>
            // Cria um link para o Instagram usando o componente Link do Next
            <li>
              <Link href="https://www.instagram.com/petola">
                <a target="_blank" rel="noopener noreferrer">Instagram</a>
              </Link>
            </li>
            // Cria um link para o Twitter usando o componente Link do Next
            <li>
              <Link href="https://www.twitter.com/petola">
                <a target="_blank" rel="noopener noreferrer">Twitter</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

// Exporta o componente Footer
export default Footer