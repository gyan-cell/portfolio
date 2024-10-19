import React from 'react'
import "./projects.scss"
import ProjectStuff from '@/components/client/ProjectStuff'

const Projects = () => {
  return (
    <>
      <div id="projects"  >
        <div className='projectSection'  >
          <h1>Projects</h1>
        </div>
        <ProjectStuff />
      </div>
    </>
  )
}

export default Projects
