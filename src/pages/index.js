import Head from 'next/head'
import { Inter } from 'next/font/google'
import Button from '@/Components/button'
import TextBoxGreen from '@/Components/textBoxGreen'
import Options from '@/Components/options'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet='UTF-8'/>
      </Head>
      <Button text='Submit'/>
      <TextBoxGreen title='MACM' placeholder='aa'/>
      <Options text='option1'/>
    </>
  )
}
