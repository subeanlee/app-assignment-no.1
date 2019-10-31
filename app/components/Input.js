import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

//arrow function
const Input = ({value, changeText, addTodo}) => (
    <TextInput
        value={value}
        style={styles.input}
        placeholder={"오늘 어떤 일을 하실 건가요?"}
        maxLength={30}
        onChangeText={changeText}
        onEndEditing={addTodo}
        returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontsize: 25,
        paddingTop: 15,
    }
})

export default Input;