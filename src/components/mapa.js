import Map from 'next/map'

export default function Home() {
  // Obtém os dados dos pets da API
  const { data, error } = useSWR('/api/pets', fetcher)

  // Renderiza o mapa
  return (
    <Map
      apiKey="YOUR_API_KEY"
      center={{ lat: -23.5505, lng: -46.6333 }}
      zoom={10}
    >
      {data.map((pet) => (
        <Marker
          key={pet.id}
          position={{ lat: pet.lat, lng: pet.lng }}
          onClick={() => alert(`Este é o ${pet.name}`)}
        />
      ))}
    </Map>
  )
}
