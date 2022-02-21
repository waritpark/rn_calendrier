import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {API_URL} from "config-env";
import AsyncStorage from '@react-native-async-storage/async-storage';


const EventsScreen = () => {
    // const start = new Date(item.start);
    const [events, setEvents] = useState([]);
    AsyncStorage.getItem('token')
        .then(token=> {
            if (token !== null) {  
                // console.log('http://192.168.1.101:8000/api/auth/events');   
                fetch('http://192.168.1.35:8000/api/auth/events', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(res => res.json())
                .then(data => { 
                    setEvents(data.map( i => {
                        i.start = new Date(i.start);
                        return i;
                        // return { ...i,start: new Date(i.start)}
                    }));
                    
                    // console.log(data);
                })
            }
        })
        .catch(err => { console.log('erreur ici eventsscreen',err) })


    return ( 
        <View>
            <Text>Évènements de la journée :</Text>
            <FlatList
                data={events}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Text>{item.start.getHours()<10?'0'+item.start.getHours() : item.start.getHours()}:{item.start.getMinutes()<10?'0'+item.start.getMinutes() : item.start.getMinutes()} : {item.name}</Text>
                )}
            />
        </View>
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