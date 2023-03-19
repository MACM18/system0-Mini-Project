import Head from 'next/head'
import { Inter } from 'next/font/google'
import Tags from '../Components/tags'
import FoodItem from '@/Components/foodItem'
import TitleBox from '@/Components/titleBox'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet='UTF-8'/>
      </Head>
      <Tags text="aaaa" />
      <Tags text="Elephent"/>
      <FoodItem Name="Rice" imageNumber={10}/>
      <TitleBox title="Food Menu"/>
    </>
  )
}
