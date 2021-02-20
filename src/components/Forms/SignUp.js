import React, { useState } from 'react';
import axios from 'axios';
import ErrorMessage from '../common/ErrorMessage';
import { useHistory, Link } from 'react-router-dom'

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
    Icon,
    Select,
  } from '@chakra-ui/core';

export default function SignUp() {
    // const [data, setData] = useState({
    //     username: "",
    //     password: "",
    //     email: "",
    //     city: "",
    //     country: "",
    //     zodiacSign: ""
    // });
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [zodiacSign, setZodiacSign] = useState('')
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    let history = useHistory();
    // fix redirect

    const handleSubmit = async e => {
        e.preventDefault()
        setIsLoading(true)

        await axios.post(
            `${process.env.REACT_APP_CAL_API_URL}` + `/api/v1/user/register`,
            {
                username: username, 
                password: password,
                email: email,
                city: city, 
                country: country,
                zodiacSign: zodiacSign
            },
            { withCredentials: true }
            ).then((data)=>{
                console.log(data)
                setIsLoggedIn(true)
                setIsLoading(false)
                if (data.data.status === 200){
                    setTimeout(() => {
                        history.push("/home")
                        window.location.reload(false)
                    }, 2000)
                }
            }).catch((err) => {
            setShowPassword(false)
            setError('Invalid username or password');
            setIsLoading(false)
            setUsername('') 
            setPassword('')
            setEmail('')
            setCity('')
            setCountry('')
            setZodiacSign('')
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
                <Link to='/home'>
                    <Button
                    variantColor="orange"
                    variant="outline"
                    width="full"
                    mt={4}
                    >
                    Home
                    </Button>
                </Link>
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
                    <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="tester@email.com"
                        size="lg"
                        onChange={e => setEmail(e.target.value)}
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
                    <FormControl isRequired>
                    <FormLabel>City</FormLabel>
                    <Input
                        type="city"
                        placeholder="Washington"
                        size="lg"
                        onChange={e => setCity(e.target.value)}
                    />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input
                        type="country"
                        placeholder="United States"
                        size="lg"
                        onChange={e => setCountry(e.target.value)}
                    />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Zodiac Sign</FormLabel>
                        <Select 
                            id='zodiacSign'
                            type="zodiacSign"
                            placeholder="Select Zodiac Sign"
                            size="lg"
                            onChange={e => setZodiacSign(e.target.value)}
                        > 
                            <option value="Capricorn">Capricorn</option>
                            <option value="Aquarius">Aquarius</option>
                            <option value="Pisces">Pisces</option>
                            <option value="Aries">Aries</option>
                            <option value="Taurus">Taurus</option>
                            <option value="Gemini">Gemini</option>
                            <option value="Cancer">Cancer</option>
                            <option value="Leo">Leo</option>
                            <option value="Virgo">Virgo</option>
                            <option value="Libra">Libra</option>
                            <option value="Scorpio">Scorpio</option>
                        </Select>
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
                        'JOIN'
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