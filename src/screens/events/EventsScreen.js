import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {API_URL} from "config-env";
import AsyncStorage from '@react-native-async-storage/async-storage';


const EventsScreen = ({navigation}) => {
    const [events, setEvents] = useState([]);
    try {
        localStorage.getItem('token').then(token => {        
            fetch(API_URL+'/api/auth/events', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(res => res.json())
            .then(data => { 
                setEvents(data);
                alert(data);
            })
            .catch(err => { console.log(err) })
        })

    } catch(e) {
        // error reading value
    }

    return (
        <Text>hello</Text>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
        // backgroundColor: '#0d4220',
    },
});

export default EventsScreen;