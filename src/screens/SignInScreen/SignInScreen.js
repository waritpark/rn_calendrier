import React, {useState} from "react";
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/logo-blanc.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";



const SignInScreen = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn('Sign in');
    }
    const test = () => {
        // https://www.py4u.net/discuss/275663
        // fetch('http://127.0.0.1:8000/calendar/dashboard/day-evenement/2022-01-03')
        fetch('http://10.0.2.2:3000/users')
        .then((response) => response.json())
        .then((responseJson) => {
            /*return responseJson.movies; */
            alert("result:"+JSON.stringify(responseJson))
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(responseJson)
            })
         }).catch((error) => {
             console.error(error);
         });
    }
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>

            <CustomInput 
                placeholder="Adresse mail" 
                value={mail} 
                setValue={setMail} 
            />
            <CustomInput 
                placeholder="Mot de passe" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />
            <CustomButton text="Connexion" onPress={onSignInPressed} />
            <CustomButton text="test ici" onPress={test} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 200,
        // backgroundColor: '#0d4220',
    },
    logo: {
        maxHeight: 180,
        maxWidth: 250,
    }
});

export default SignInScreen