import { React } from "react";
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 'auto',
        padding: 10,
        paddingHorizontal: 40,
        marginVertical: 15,
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomButton;