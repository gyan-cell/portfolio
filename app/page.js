import Image from 'next/image'
import styles from './page.module.css'
import Heropage from '@/components/Heropage'
import About from '@/components/About'
import ContainerOfProjAndContact from '@/components/ContainerOfProjAndContact'

export default function Home() {
  return (
    <div>
      <Heropage />
      <About />
      <ContainerOfProjAndContact />
    </div>
  )
}
