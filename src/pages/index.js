import Head from 'next/head'
import { Inter } from 'next/font/google'
import ContactMenu from '@/Components/CombinedComponents/ContactMenu'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet='UTF-8'/>
      </Head>
      <ContactMenu />
    </>
  )
}
