import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//arrow function
const SubTitle = ({title}) => (
    <View>
        <Text style={styles.SubTitleText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    SubTitleText: {
        color: "#000",
        fontsize: 18,
        fontweight: "600"
    }
})

export default SubTitle;