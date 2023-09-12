import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const Main = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;
`

const SectionTwo = () => {
  return (
    <Main>
      <h2 style={{"fontWeight": "400"}}>Sing up and Apply to schools of your choice with a common Application Forms</h2>
    </Main>
  )
}

export default SectionTwo
