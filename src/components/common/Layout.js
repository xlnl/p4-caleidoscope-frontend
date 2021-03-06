import { useState, useEffect } from "react";  
import { Link, useHistory } from "react-router-dom"
import {  
    Box,  
    Heading,  
    Flex,  
    useColorMode,  
    IconButton, 
    Button,
    Text
} from "@chakra-ui/core";  
import { Spacer } from "@chakra-ui/react"

import { logout, getCurrentUser } from "../../services/user.service"

const Layout = props => {  
    const { colorMode, toggleColorMode } = useColorMode();
    const [currentUser, setCurrentUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const history = useHistory()

    useEffect(() => {
        getCurrentUser()
          .then(res => {
              if(res.data.status.code === 200) {
                setCurrentUser(res.data.data)
                setIsLoggedIn(true)
              }
              else setCurrentUser(undefined)
          }, err => {
            console.log(err)
          })
    }, [])

    const loggingOut = () => {
      logout()
        .then(res => {
            console.log(res.data.status.message)
            setIsLoggedIn(false)
            setTimeout(()=>{
                history.push('/')
            }, 1500)
        }, err => {
            console.log(err)
        })
    }

    return (  
        <>
            { isLoggedIn? (
                <Flex  
                    as="nav"  
                    align="center"  
                    justify="space-between"  
                    wrap="wrap"  
                    padding=".7rem"  
                    bg={colorMode === "light" ? "gray.900" : "purple.700"}  
                    color={colorMode === "light" ? "purple.300" : "white"}  
                    borderBottom="1px solid black"  
                    {...props}  
                >  
                    <Flex align="center" mr={5}>
                        <Link to="/">
                        <Heading as="h1" size="lg" letterSpacing={"-.1rem"} spaceBetween={1}>  
                            CALEIDOSCOPE
                        </Heading>  
                        </Link>
                    </Flex>
                    <Box  
                        display="flex"  
                        width="auto"  
                        alignItems="center"  
                        flexGrow={1}  
                        color={colorMode === "light" ? "purple.300" : "white"}
                    >  
                        <Link to="/home">Home</Link>  
                    </Box>
                    <Box>
                        <Spacer />
                    </Box>
                    <Box
                        display="block"  
                        align="right"
                        mt={{ base: 4, md: 0 }}  
                    >  
                        <IconButton  
                            bg="transparent"  
                            aria-label="toggle color mode"  
                            icon={colorMode === "light" ? "moon" : "sun"}  
                            onClick={toggleColorMode}  
                            color="white"  
                        />  
                    </Box>  
                    <Box>
                        <Text>{currentUser.username}</Text> 
                    </Box>
                    <Button 
                    bg="transparent"
                    onClick={loggingOut}
                    > Log Out
                    </Button>
                </Flex>  
                ):(
                <Flex  
                    as="nav"  
                    align="center"  
                    justify="space-between"  
                    wrap="wrap"  
                    padding=".7rem"  
                    bg={colorMode === "light" ? "gray.900" : "purple.700"}  
                    color={colorMode === "light" ? "purple.300" : "white"}  
                    borderBottom="1px solid black"  
                    {...props}  
                >  
                    <Flex align="center" mr={5}>
                        <Link to="/">
                        <Heading as="h1" size="lg" letterSpacing={"-.1rem"} spaceBetween={1}>  
                            CALEIDOSCOPE
                        </Heading>  
                        </Link>
                    </Flex>
                    <Box
                    display="block"  
                    mt={{ base: 4, md: 0 }}  
                    >  
                    <IconButton  
                        bg="transparent"  
                        aria-label="toggle color mode"  
                        icon={colorMode === "light" ? "moon" : "sun"}  
                        onClick={toggleColorMode}  
                        color="white"  
                    />  
                    </Box>  
                    <Button 
                        bg="transparent"
                    > <Link to="/join">Log In</Link>
                    </Button>
                </Flex>  
                )}  
            <div>{props.children}</div>
        </>
    );  
};  

export default Layout;  
