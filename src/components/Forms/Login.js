import React, { useState } from 'react';
import axios from 'axios'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  Text,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import { login } from '../../services/mockApi';
import ErrorMessage from '../common/ErrorMessage';

import { useHistory } from 'react-router-dom'


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
   
    // let history = useHistory();
    // fix redirect
    const handleSubmit = async e => {
        e.preventDefault()
        setIsLoading(true)

        await axios.post(
            `${process.env.REACT_APP_CAL_API_URL}` + `/api/v1/user/login`,
            {
                username: username, 
                password: password
            },
            { withCredentials: true }
        ).then((data)=>{
            console.log(data)
            setIsLoggedIn(true)
            setIsLoading(false)
            if (data.data.status === 200){
                setTimeout(() => {
                    window.location.replace('/')
                }, 2000)
            }
        }).catch((err) => {
            setShowPassword(false)
            setError('Invalid username or password');
            setIsLoading(false)
            setUsername('')
            setPassword('')
            setShowPassword(false);
        })
    };

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <Flex width="full" align="center" justifyContent="center">
        <Box
            p={8}
            maxWidth="500px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
        >
            {isLoggedIn ? (
            <Box textAlign="center">
                <Text>{username} logged in!</Text>
                <Button
                variantColor="purple"
                variant="outline"
                width="full"
                mt={4}
                onClick={() => setIsLoggedIn(false)}
                >
                Log Out
                </Button>
            </Box>
            ) : (
            <>
                <Box my={4} textAlign="left">
                <form onSubmit={handleSubmit}>
                    {error && <ErrorMessage message={error} />}
                    <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="username"
                        placeholder="tester"
                        size="lg"
                        onChange={e => setUsername(e.target.value)}
                    />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="*******"
                        size="lg"
                        onChange={e => setPassword(e.target.value)}
                        />
                        <InputRightElement width="3rem">
                        <Button
                            h="1.5rem"
                            size="sm"
                            onClick={handlePasswordVisibility}
                        >
                            {showPassword ? (
                            <Icon name="view-off" />
                            ) : (
                            <Icon name="view" />
                            )}
                        </Button>
                        </InputRightElement>
                    </InputGroup>
                    </FormControl>
                    <Button
                    variantColor="teal"
                    variant="outline"
                    type="submit"
                    width="full"
                    mt={4}
                    >
                    {isLoading ? (
                        <CircularProgress
                        isIndeterminate
                        size="24px"
                        color="teal"
                        />
                    ) : (
                        'ENTER'
                    )}
                    </Button>
                </form>
                </Box>
            </>
            )}
        </Box>
        </Flex>
    );
}