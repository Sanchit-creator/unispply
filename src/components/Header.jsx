import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Main = styled(Box)`
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1F5CA2;
`

const SearchBox = styled(Box)`
    height: 15vh;
    width: 45vw;
    border-radius: 5px
`

const Header = () => {
  return (
    <Main>
      <h1 style={{"color": "white", "fontWeight": "400"}}>The School Admission Platform</h1>
      <SearchBox style={{"backgroundColor": "#194A82"}}>
        <Box style={{"display": "flex", "justifyContent": "space-between", "width": "90%", "paddingLeft": "1vw"}}>
            <h3 style={{"color": "white", "fontWeight": "400"}}>Day School</h3>
            <h3 style={{"color": "white", "fontWeight": "400"}}>Boarding School</h3>
            <h3 style={{"color": "white", "fontWeight": "400"}}>Day boarding School</h3>
            <h3 style={{"color": "white", "fontWeight": "400"}}>Play School</h3>
        </Box>
        <Box style={{"display": "flex", "justifyContent": "center"}}>
            <input placeholder='Search Day School...' style={{"height": "35px", "width": "50%", "borderTopLeftRadius": "5px", "borderBottomLeftRadius": "5px"}}/>
            <Button style={{"backgroundColor": "red", "borderTopLeftRadius": "0", "borderBottomLeftRadius": "0", "color": "#fff", "height": "40px", "width": "20%"}}><SearchIcon/>Search</Button>
        </Box>
      </SearchBox>
      <Box style={{"width": "45vw", "display": "flex", "justify-content": "end", "color": "white"}}>
      💡How Uniapply Works
      </Box>
    </Main>
  )
}

export default Header
