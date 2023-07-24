import Contact from '@/clientComponents/Contact'
import React from 'react'
import '../styles/contactContainer.scss'
import Projects from '@/clientComponents/Projects'
const ContainerOfProjAndContact = () => {
  return (
    <div>
      <div className='container'  >
        <div className='contactContainer'  >
          <Contact />
        </div>
        <div className='projectContainer'  >
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default ContainerOfProjAndContact
