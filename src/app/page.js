import Image from 'next/image'
import Title from '../components/title'
import Carousel from 'next/carousel'
import Map from 'next/map'
import Chatbot from 'next/chatbot'
import useSWR from 'swr'
import Footer from './Footer' // Import Footer component

export default function Home() {
  // Obtém os dados dos pets da API
  const { data, error } = useSWR('/api/pets', fetcher)

  // Cria uma instância do chatbot com a API escolhida
  const chatbot = new Chatbot('YOUR_API_KEY', 'YOUR_API_URL')

  return (
    <>
      <nav className='bg-violet-800 p4'>
        <h1 className='text-4xl text-lime-400'>PetOla</h1>
      </nav>

      <Title>P/Adoção</Title>

      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
          <h1 className='text-6xl font-bold'>
            Bem-vindo(a) ao{' '}
            <a className='text-blue-600' href='https://petola.com.br'>
              PetOla
            </a>
          </h1>

          <p className='text-xl mt-4'>
            PetOla é uma página web que te ajuda a encontrar e adotar um pet que precisa de um lar. Aqui você pode ver os pets disponíveis para adoção, saber mais sobre eles, e entrar em contato com os responsáveis pela adoção. Você também pode conversar com o nosso chatbot, que vai tirar as suas dúvidas sobre a adoção de pets.
          </p>

          <Carousel className='mt-8'>
            {data.map((pet) => (
              <div key={pet.id} className="pet-card">
                <Image src={pet.image} alt={pet.name} width={300} height={300} />
                <h2>{pet.name}</h2>
                <p>{pet.description}</p>
                <button>Adotar</button>
              </div>
            ))}
          </Carousel>

          <Map
            apiKey="YOUR_API_KEY"
            center={{ lat: -23.5505, lng: -46.6333 }}
            zoom={10}
            className='mt-8'
          >
            {data.map((pet) => (
              <Marker
                key={pet.id}
                position={{ lat: pet.lat, lng: pet.lng }}
                onClick={() => alert(`Este é o ${pet.name}`)}
              />
            ))}
          </Map>

          <Chatbot
            chatbot={chatbot}
            welcomeMessage="Olá, eu sou o PetOlaBot, um assistente virtual que te ajuda a adotar um pet. O que você gostaria de saber?"
            className='mt-8'
          />
        </main>
      </div>

      <Footer /> {/* Include Footer component here */}
    </>
  )
}
