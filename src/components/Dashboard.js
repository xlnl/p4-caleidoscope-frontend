import React,{ useState, useEffect } from 'react'
import axios from "axios";
import {
    Flex,
    Box,
    Text, 
    Heading,
    Stack,
} from '@chakra-ui/core';
import { HStack } from '@chakra-ui/react'

// import Weather from './common/Weather'
import Horoscope from './Horoscope'
import Notes from './Notes/Notes'
import NoteForm from './Forms/NoteForm'
import EditForm from './Forms/EditForm';
import Schedule from './Schedule'

import { findAll } from '../services/note.service';
import { getCurrentUser } from '../services/user.service'


const api = {
    key: "813d16a5ee3735ec9bd8ea5f6718b9b5",
    base: "https://api.openweathermap.org/data/2.5/"
}

function capitalize(str) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}
  
const Dashboard = () => {
    const [user, setUser] = useState('')
    const [username, setUsername] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [zodiacSign, setZodiacSign] = useState('')
    const [notes, setNotes] = useState([])
    // const [horoscope, setHoroscope] = useState('')
    const [weather, setWeather] = useState('')
    const [feelsLike, setFeelsLike] = useState('')
    const [temp, setTemp] = useState('')
    const [noteId, setNoteId] = useState(null)

    useEffect(() => {
        getCurrentUser()
        .then(res => {
            let cityData = capitalize(res.data.data[0].city)
            console.log(cityData)
            setUsername(res.data.data[0].username)
            setCity(cityData)
            setZodiacSign(res.data.data[0].zodiacSign)
            setUser(res.data.data[0].id)
        })
    }, [])

    useEffect(() => {
        findAll()
        .then(res => {
            let foundNotes = res.data.data.reverse()
            setNotes(foundNotes)
        })
    }, [])

    useEffect(()=>{
        setTimeout((city) => {
            getWeather(city)
        }, 2000)
    },[])

    const getWeather = async () => {
        await axios.get(`${api.base}forecast?q=washington&units=imperial&appid=${api.key}`)
            .then(res => {
                console.log(res.data);
                let weatherAPI = res.data.list[0]
                let countryCode = res.data.city.country
                let temp = res.data.list[0].main.temp
                let feelsLike = res.data.list[0].main.feels_like
                setFeelsLike(feelsLike)
                setTemp(temp)
                setWeather(weatherAPI)
                setCountry(countryCode);
            })
            .catch((err) => {
                console.log("erroring reaching weather api!!!!", err)
            });
    }

    const setNote = (id) => {
        setNoteId(id)
    }
        
    return (
        <Box>
            <Flex align="center" justifyContent="center" padding="1rem">
                <Stack>
                    <Box
                        p={8}
                        borderWidth={1}
                        borderRadius={8}
                        boxShadow="lg"
                        bg="gray.300"
                        opacity="0.90"
                    >
                        <Heading as="h3" size="md">Welcome, {username}</Heading>
                    </Box>
                    <HStack p={2}>
                        <HStack>
                            <Box
                                p={8}
                                h="305px"
                                borderWidth={1}
                                borderRadius={8}
                                boxShadow="lg"
                                bg="gray.300"
                                opacity="0.90"
                            >
                                <Heading as="h3" size="md">Weather Data</Heading>
                                <Text> It is currently {temp} ℉ in {city}, {country}</Text>
                                <Text> Feels like {feelsLike} ℉ though.</Text>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box
                                p={8}
                                w="500px"
                                borderWidth={1}
                                borderRadius={8}
                                boxShadow="lg"
                                bg="gray.300"
                                opacity="0.90"
                            >
                                <Horoscope />
                            </Box>
                        </HStack>
                    </HStack>
                    <Box>
                        <Schedule />
                    </Box>
                    <Box
                        p={8}
                        borderWidth={1}
                        borderRadius={8}
                        boxShadow="lg"
                        bg="gray.300"
                        opacity="0.90"
                    >
                        <NoteForm noteId={noteId} setNote={setNote} user={user}/>
                        <Notes notes={notes} setNoteId={setNoteId}/>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
};

// {currentUser ? (
//     <div className="navbar-nav ml-auto">
//         <li className="nav-item">
//             <Link to={"/profile"} className="nav-link">
//                 {currentUser.username}
//             </Link>
//         </li>
//         <li className="nav-item">
//             <a href="/login" className="nav-link" onClick={logOut}>
//                 Log Out
//             </a>
//         </li>
//     </div>
// ) : (
//         <div className="navbar-nav ml-auto">
//             <li className="nav-item">
//                 <Link to={"/login"} className="nav-link">
//                     Login
//                 </Link>
//             </li>
//         </div>
//     )}

export default Dashboard;
