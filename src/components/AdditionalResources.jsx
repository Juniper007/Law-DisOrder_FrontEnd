import React from 'react'
import ResourcesHeader from './ResourcesHeader'
import './Resources.css'

function AdditionalResources() {
  return (
    <div className="ur-mom">
      <ResourcesHeader />
      <div className="krang">
        <iframe
          title="additional-resources"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHonGhuR20X7dAbY6nv21nMg6i1sLkPAncCPiloQXgLfmOVVfXFRqtjVjyt3-H5lNd8Z5yooA6-Y_G/pubhtml?widget=true&amp;headers=false"
        ></iframe>
      </div>
    </div>
  )
}

export default AdditionalResources
