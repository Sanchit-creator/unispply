import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useState } from 'react'

const Main = styled(Box)`
    display: flex;
    height: 30vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #1F5CA2   
`

const CircleBox = styled(Box)`
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 50%;
`;

const SectionFour = () => {
    const [selectedCircle, setSelectedCircle] = useState(null);

    const handleCircleClick = (circleNumber) => {
        setSelectedCircle(circleNumber);
    };
  return (
    <Main>
      <h1>Did you know?</h1>
      <p style={{"color": "white"}}>{selectedCircle === 1 ? 'Content 1' : selectedCircle === 2 ? 'Content 2' : 'Content 3'}</p>
            <Box style={{ display: 'flex', justifyContent: 'space-around', width: '10vw' }}>
                <CircleBox onClick={() => handleCircleClick(1)} />
                <CircleBox onClick={() => handleCircleClick(2)} />
                <CircleBox onClick={() => handleCircleClick(3)} />
            </Box>
    </Main>
  )
}

export default SectionFour
