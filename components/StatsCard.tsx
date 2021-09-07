import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { FaDatabase } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
// 
// GoGraph
export default function StatsCard() {
    return (
        <Card style={styles.card}>
            <View style={styles.card_content}>
                <Title style={{ margin: 'auto' }}>{"COVID-19"}</Title>
                <GoGraph style={{ height: '100px', width: '100px', marginTop: '20', marginBottom:"40" }} />
                <Subheading style={styles.sub_head}>{"Overall Stats and More"}</Subheading>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 300,
        width: "100%",
        backgroundColor: "#FF6B6B",
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
    sub_head:{
        fontWeight: '800',

    }
})
// primary #95DAC1
// secondary #00A19D
// teritiary #6F69AC