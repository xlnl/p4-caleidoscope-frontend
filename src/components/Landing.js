import React from "react"
import { Link } from "react-router-dom"

// CSS imports
import "../css/Landing.css"
import {
    Button,
    Text, 
    Stack,
    Heading,
    Box,
    Flex
} from '@chakra-ui/core'

// landing page for more info about Caleidoscope
const Landing = () => {
    return (
        <div className={"landing-page"}>
            <Flex width="full" align="center" justifyContent="center" className={"landing-container"}>
                <Box
                    p={10}
                    maxWidth="600px"
                >
                    <Stack>
                        <Text fontSize="xl" color="gray.200" >Welcome to</Text>
                        <Heading fontSize="60px" size="2xl" color="white">Caleidoscope</Heading>
                        <Text fontSize="md" color="gray.200">— where you can <strong>see</strong> exactly what you need to do to <strong>seize</strong> any day.</Text>
                        <Link to="/join">
                            <Button
                                variantColor="yellow"
                                variant="outline"
                                type="submit"
                                mt={4}
                            >
                                    Sign Up
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Flex>
        </div>
    )
};

export default Landing