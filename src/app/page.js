import Image from 'next/image'
import Title from '../components/title'
import useSWR from 'swr'
import Footer from '@/components/footer'
// Import Footer component

export default function Home() {

  return (
    <>
      <nav className='bg-violet-800 p4'>
        <h1 className='text-4xl text-lime-400'>PetOla</h1>
      </nav>

      <Title>Cachorros</Title>

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

        </main>
      </div>

      <Footer 
        descricao = "A página web para adoção de pets"
      />
    </>
  )
}
