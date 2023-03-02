import React from 'react'
import { Typography, Button } from '@mui/material'

function AboutHeader(props) {
  const { setAboutProject, aboutProject } = props
  return (
    <div className="header">
      <div className="page-title">
        <Typography variant="h3" gutterbottom>
          About This Project
        </Typography>
      </div>
      <br />
      <div className="aboutUs-nav">
        <Button
          sx={{ ':hover': { bgcolor: '#00349b', color: 'white' } }}
          id={'headerButton' + (aboutProject ? 'selected' : '')}
          variant="outlined"
          onClick={() => {
            setAboutProject(true)
          }}
        >
          <Typography gutterBottom>ABOUT OUR PROJECT</Typography>
        </Button>
        <Button
          sx={{ ':hover': { bgcolor: '#00349b', color: 'white' } }}
          id={'headerButton' + (aboutProject ? '' : 'selected')}
          variant="outlined"
          onClick={() => {
            setAboutProject(false)
          }}
        >
          <Typography gutterBottom>ABOUT US</Typography>
        </Button>
      </div>
    </div>
  )
}

export default AboutHeader
