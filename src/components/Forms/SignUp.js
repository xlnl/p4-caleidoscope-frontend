import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
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

import { register } from '../../services/mockApi';
import ErrorMessage from '../common/ErrorMessage';

export default function SignUp() {
    const [data, setData] = useState({
        username: "",
        password: "",
        email: "",
        city: "",
        country: "",
        zodiacSign: ""
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        setIsLoading(true);
        // refactor latest for dryer code - map it all to data object; handle better action logic
        try {
        await register({ data });
        setIsLoggedIn(true);
        setIsLoading(false);
        setShowPassword(false);
        } catch (error) {
        setError('Invalid username or password');
        setIsLoading(false);
        setData('');
        setShowPassword(false);
        }
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
                <Text>{data.username} logged in!</Text>
                <Button
                variantColor="orange"
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
                        onChange={e => setData({ 
                            ...data, username: e.target.value})}
                    />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="tester@email.com"
                        size="lg"
                        onChange={e => setData({ 
                            ...data, email: e.target.value})}
                    />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="*******"
                        size="lg"
                        onChange={e => setData({ 
                            ...data, password: e.target.value})}
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
                        onChange={e => setData({ 
                            ...data, city: e.target.value})}
                    />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input
                        type="country"
                        placeholder="United States"
                        size="lg"
                        onChange={e => setData({ 
                            ...data, country: e.target.value})}
                    />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Zodiac Sign</FormLabel>
                    <Input
                        type="zodiacSign"
                        placeholder="scorpio"
                        size="lg"
                        onChange={e => setData({ 
                            ...data, zodiacSign: e.target.value})}
                    />
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