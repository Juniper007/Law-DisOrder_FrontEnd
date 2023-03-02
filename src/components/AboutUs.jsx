import React, { useState } from 'react'
import BioCards from './BioCards'
import AboutProject from './AboutProject'
import AboutHeader from './AboutHeader'
import './AboutUs.css'

function AboutUs() {
  const [aboutProject, setAboutProject] = useState(false)
  return (
    <div className="about-us">
      <AboutHeader
        setAboutProject={setAboutProject}
        aboutProject={aboutProject}
      />
      {aboutProject && <AboutProject />}
      {!aboutProject && <BioCards />}
    </div>
  )
}

export default AboutUs
