import React,{ useState, useEffect } from 'react'
import axios from "axios";
import {
    Flex,
    Box,
    Text, 
    Heading
} from '@chakra-ui/core';

import Weather from './common/Weather'
import Notes from './Notes/Notes'
import NoteForm from './Forms/NoteForm'
import EditForm from './Forms/EditForm';

import { findAll } from '../services/note.service';
import { currentUser } from '../services/user.service'


const api = {
    key: "813d16a5ee3735ec9bd8ea5f6718b9b5",
    base: "https://api.openweathermap.org/data/2.5/"
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
    const [noteId, setNoteId] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        currentUser()
        .then(res => {
            setUsername(res.data.data[0].username)
            setCity(res.data.data[0].city)
            setZodiacSign(res.data.data[0].zodiacSign)
            setUser(res.data.data[0].id)
        })
    }, [])

    useEffect(() => {
        findAll()
        .then(res => {
            setNotes(res.data.data)
            console.log(res.data.data)
        })
    }, [])


    const getWeather =  () => {
        axios.get(`${api.base}forecast?q=washington&units=imperial&appid=${api.key}`)
            .then(res => {
                console.log(res.data);
                let weatherAPI = res.data.list[0]
                let countryCode = res.data.city.country
                setWeather(weatherAPI)
                setCountry(countryCode);
            })
            .catch((err) => {
                console.log("erroring reaching weather api!!!!", err)
            });
    }

    useEffect(()=>{
        getWeather()
    }, [])
    

    const setNote = (id) => {
        setNoteId(id)
    }
        
    return (
        <Box>
            <Heading as="h3" size="md">Welcome, {username}</Heading>
            <Flex align="center" justifyContent="center" padding="1rem">
                <Box
                    p={8}
                    w="500px"
                    borderWidth={1}
                    borderRadius={8}
                    boxShadow="lg"
                    bg="white"
                >
                    <Text>Weather Data</Text>
                    <Weather weather={weather} city={city} country={country}/>
                </Box>

                <Box
                    p={8}
                    w="500px"
                    borderWidth={1}
                    borderRadius={8}
                    boxShadow="lg"
                >
                    <NoteForm noteId={noteId} setNote={setNote} setUser={user}/>
                    <Notes notes={notes} />
                    <EditForm setNote={setNote} setUser={user}/>
                </Box>
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
