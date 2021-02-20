import {
    Box, 
    Text
} from '@chakra-ui/core';

function capitalize(str) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}

export default function Weather(props) {
    const city = capitalize(props.city)
    const country = props.country
    const weatherData = props.weather
    const temp = weatherData.main.temp

    console.log("all weather data here", weatherData)
    console.log(temp)

    return (
        <Box>
            <Text> Forecast for {city}, {country}: </Text>
            <Text> {temp} ℉</Text>
        </Box>
    )
}
