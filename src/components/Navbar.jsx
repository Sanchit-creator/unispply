import styled from '@emotion/styled'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] = useState(false);

    const handleSignupClick = () => {
        setShowSignup(true);
        setShowSignin(false);
    };

    const handleSigninClick = () => {
        setShowSignup(false);
        setShowSignin(true);
    };
    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    const Main = styled(Box)`
        display: flex;
        justify-content: space-between;
        padding-left: 5vw;
        background-color: ${isScrolled ? '#fff' : '#1F5CA2'};
        color: ${isScrolled ? '#000' : '#fff'};
        position: fixed;
        width: 95vw;
        z-index: 100;
    `

    const Heading = styled(Box)`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vw;
    `

    const Sel = styled(Select)`
        width: 8vw;
    `

    const HeadingTwo = styled(Box)`
        display: flex;
        justify-content: space-around;
        width: 60vw;
        margin-right: 5vw;
    `

  return (
    <Main>
        <Heading>
            <h3>
                UNIAPPLY
            </h3>
            <FormControl variant="standard" fullWidth>
                <Sel
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Location"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Sel>
            </FormControl>
        </Heading>
        <HeadingTwo>
            <Box style={{"display": "flex", "justify-content": "space-between", "align-items": "center", "font-size": "15px"}}>
                <Box style={{"display": "flex", "justify-content": "center", "align-items": "center"}} width="10vw">Explore Schools</Box>
                <Box style={{"display": "flex", "justify-content": "center", "align-items": "center"}} width="10vw">Boarding Schools</Box>
                <Box style={{"display": "flex", "justify-content": "center", "align-items": "center"}} width="10vw">Admission Tracker</Box>
                <Box style={{"display": "flex", "justify-content": "center", "align-items": "center"}} width="10vw">Compare Schools</Box>
                <FormControl variant="standard" style={{"color": "white"}}>
                    <InputLabel id="demo-simple-select-standard-label">Resources</InputLabel>
                    <Sel
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Location"
                        style={{"color": "white"}}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Sel>
                </FormControl>
            </Box>
            <Box style={{"display": "flex", "justify-content": "space-around", "align-items": "center", "width": "15vw"}}>
                <Box style={{"display": "flex", "justify-content": "center", "align-items": "center"}}>
                    <ShoppingCartIcon fontSize='medium'/>
                    Cart
                </Box>
                <Box 
                style={{"display": "flex", "justify-content": "center", "width": "5vw","height": "5vh","align-items": "center", "border": "1px solid white", "border-radius": "5px"}}
                onClick={handleSigninClick}
                >
                    Sign In
                </Box>
                {/* <AccountCircleIcon fontSize='large'/> */}
            </Box>
        </HeadingTwo>
    </Main>
  )
}

export default Navbar