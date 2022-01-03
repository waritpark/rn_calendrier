import { React } from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                style={styles.input} 
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: 'rgb(125, 125, 125)',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 15,
    },
    input: {
        // textAlign: 'center',
        width: 180,
        color: 'white',
    }
});

export default CustomInput