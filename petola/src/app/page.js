import Image from 'next/image'
import Title from '../components/title'

export default function Home() {
  return (
    <>
    <nav className='bg-violet-800 p4'>
      <h1 className='text-4xl text-lime-400'>PetOla</h1>
    </nav>

    <Title>P/Adoção</Title>

    <Title></Title>

    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          Welcome to{' '}
          <a className='text-blue-600' href='https://nextjs.org'>
            PetOla
          </a>
        </h1>
      </main>
    </div>
    </>
   )
}
