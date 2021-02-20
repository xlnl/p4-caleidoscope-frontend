import React,{ useState, useEffect } from 'react'
import axios from "axios";
import {
    Flex,
    Box,
    Text, 
    Heading,
    Stack
} from '@chakra-ui/core';

// import Weather from './common/Weather'
import Horoscope from './Horoscope'
import Notes from './Notes/Notes'
import NoteForm from './Forms/NoteForm'
import EditForm from './Forms/EditForm';

import { findAll } from '../services/note.service';
import { currentUser } from '../services/user.service'


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
    const [temp, setTemp] = useState('')
    const [noteId, setNoteId] = useState(null)

    useEffect(() => {
        currentUser()
        .then(res => {
            let cityData = capitalize(res.data.data[0].city)
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


    const getWeather = () => {
        axios.get(`${api.base}forecast?q=washington&units=imperial&appid=${api.key}`)
            .then(res => {
                console.log(res.data);
                let weatherAPI = res.data.list[0]
                let countryCode = res.data.city.country
                let temp = res.data.list[0].main.temp
                setTemp(temp)
                setWeather(weatherAPI)
                setCountry(countryCode);
            })
            .catch((err) => {
                console.log("erroring reaching weather api!!!!", err)
            });
    }
    
    useEffect(()=>{
        getWeather()
    },[])

    const setNote = (id) => {
        setNoteId(id)
    }
        
    return (
        <Box>
            <Flex align="center" justifyContent="center" padding="1rem">
                <Stack>
                    <Box
                        p={8}
                        w="500px"
                        borderWidth={1}
                        borderRadius={8}
                        boxShadow="lg"
                        bg="gray.300"
                        opacity="0.90"
                    >
                        <Heading as="h3" size="md">Welcome, {username}</Heading>
                    </Box>
                    <Box
                        p={8}
                        w="500px"
                        borderWidth={1}
                        borderRadius={8}
                        boxShadow="lg"
                        bg="gray.300"
                        opacity="0.90"
                    >
                        <Heading as="h3" size="md">Weather Data</Heading>
                        <Text> It is currently {temp} ℉ in {city}, {country}</Text>
                    </Box>
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
                    <Box
                        p={8}
                        w="500px"
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
