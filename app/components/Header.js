import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//arrow function
const Header = () => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My To-Do App</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        marginTop:70,
        marginBottom:40
    },
    headerText: {
        fontsize: 26,
        fontweight: '600',
        color: '#3f4e66'
    }
})

export default Header;