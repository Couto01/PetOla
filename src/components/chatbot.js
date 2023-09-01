import Chatbot from 'next/chatbot'

export default function Home() {
  // Cria uma instância do chatbot com a API escolhida
  const chatbot = new Chatbot('YOUR_API_KEY', 'YOUR_API_URL')

  // Renderiza o chatbot
  return (
    <Chatbot
      chatbot={chatbot}
      welcomeMessage="Olá, eu sou o PetOlaBot, um assistente virtual que te ajuda a adotar um pet. O que você gostaria de saber?"
    />
  )
}
