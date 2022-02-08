import React, {useState} from "react";
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/logo-blanc.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import {API_URL} from "config-env";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {

            fetch(API_URL+'/api/auth/login', {
                // 192.168.27.160 on phone
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({"email": email, "password": password})
            })
            .then(res => res.json())
            .then(data => { 
                console.log(data)
                localStorage.setItem('token', data.token)
            })
            .then(navigation.navigate("EventsScreen"))
            .catch(err => { console.log(err) })
        
    }
    
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>

            <CustomInput 
                placeholder="Adresse mail" 
                value={email} 
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="Mot de passe" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />
            <CustomButton text="Connexion" onPress={register} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 200,
        backgroundColor: '#333333',
    },
    logo: {
        maxHeight: 180,
        maxWidth: 250
    }
});

export default SignInScreen;