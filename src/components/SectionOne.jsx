import { Box } from '@mui/material'
import React from 'react'

const SectionOne = () => {
  return (
    <Box style={{"height": "30vh", "backgroundColor": "#F3F7FC", "display": "flex", "justify-content": "center", "align-items": "center"}}>
      <Box style={{"width": "30%", "height": "100%" ,"display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"}}>
        Photo+
      </Box>
      <Box style={{"width": "70%", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"}}>
        <Box>
            <h1 style={{"text-align": "left"}}>
                UniApply Cities
            </h1>
            <p>Tell us where you are we'll help you to discover schools for your child</p>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionOne
