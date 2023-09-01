export default function Footer({descricao}) {

  return (
    <footer className="bg-violet-800 p-4 text-lime-400">
     
      <div className="container flex flex-row items-center justify-between mx-auto">

        <div className="site-name">
          <h1>PetOla</h1>
          <p>{descricao}</p>
        </div>
        <div className="contacts">
          <h2>Contatos</h2>
          <p>Email: petola@gmail.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div className="social-links">
          <h2>Siga-nos nas redes sociais:</h2>
          <ul className="flex flex-row space-x-4">
      
            <li>
              <a>Facebook</a>
            </li>
           
            <li>
              <a>Facebook</a>
            </li>
            
            <li>
            <a>Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
