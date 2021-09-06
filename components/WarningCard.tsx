import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper'
import { RiVirusLine } from "react-icons/ri";

export default function WarningCard() {
    return (

        <Card style={styles.card}>
            <View style={styles.card_content}>
                <Title style={{ margin: 'auto' }}>{"COVID-19"}</Title>
                <RiVirusLine style={{ color: 'red', margin: 0, height: '200px', width: '200px' }} />
                <Title style={{ margin: 'auto' }}>{"Do's And Dont's"}</Title>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    card: {
        height: 450,
        width: "100%",
        backgroundColor: "#95DAC1",
        padding: 0,
        margin: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 40,
        paddingBottom: 0
    }
    ,
    card_content: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Verdana',
    }
    ,
    container: {
        alignItems: 'center',
        textAlign: 'center',
    }
})


