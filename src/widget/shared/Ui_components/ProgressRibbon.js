import React from 'react'
import Ribbon from './Ribbon'
import ProgressBar from './ProgressBar'

function ProgressRibbon() {
  return (
    <div className="progressBar-container">
    <div className="sub-container">
    <Ribbon/>
    <ProgressBar />
    </div>
    {/* <div className="navigation-container">
    </div> */}
  </div>
  
  )
}

export default ProgressRibbon