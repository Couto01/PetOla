import Carousel from 'next/carousel'

export default function Home() {
  // Obtém os dados dos pets da API
  const { data, error } = useSWR('/api/pets', fetcher)

  // Renderiza o carrossel
  return (
    <Carousel>
      {data.map((pet) => (
        <div key={pet.id} className="pet-card">
          <Image src={pet.image} alt={pet.name} width={300} height={300} />
          <h2>{pet.name}</h2>
          <p>{pet.description}</p>
          <button>Adotar</button>
        </div>
      ))}
    </Carousel>
  )
}
