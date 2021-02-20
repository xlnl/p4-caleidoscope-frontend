import React, { Component } from 'react';
import { 
    Box, 
    Heading,
    Text
} from '@chakra-ui/core';

class Horoscopes extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=scorpio&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render() {
        return (
          <Box>
              <Heading as="h4" size="md">Your Horoscope, Scorpio</Heading>
              <Text>Current Date: {this.state.json.current_date}</Text>
              <Text>Compatibility: {this.state.json.compatibility}</Text>
              <Text>Lucky Number: {this.state.json.lucky_number}</Text>
              <Text>Wear {this.state.json.color} today.</Text>
              <Text>You will likely feel {this.state.json.mood} today.</Text>
              <Text>More Details: {this.state.json.description}</Text>
          </Box>
        );
    }
}

export default Horoscopes;