import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Cards(props) {
    var title;
    var number;
    return (
        <View>
            <Text>{title}</Text>
            <Text>{props.number}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

})
