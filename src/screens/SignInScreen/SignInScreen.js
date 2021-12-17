import React, {useState} from "react";
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";



const SignInScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn('Sign in');
    }
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>

            <CustomInput 
                placeholder="Adresse mail" 
                value={username} 
                setValue={setUsername} 
            />
            <CustomInput 
                placeholder="Mot de passe" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />
            <CustomButton text="Connexion" onPress={onSignInPressed} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    logo: {
        maxHeight: 180,
        maxWidth: 250,
    }
});

export default SignInScreen