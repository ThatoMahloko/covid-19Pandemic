import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { FcHighPriority } from "react-icons/fc";

export default function CardComp(props) {
    return (
        <Card style={styles.card}>
            <View style={styles.card_content}>
                <Title>{props.title_card}</Title>
                <Subheading style={styles.sub_head}>{props.subhead_card}</Subheading>
                <Paragraph style={styles.p__text}>{props.paragraph_card}</Paragraph>
            </View>
            <View style={styles.card_content}>
                <FcHighPriority style={{height:'160px', width: '160px', marginTop:'20'}}/>
            </View>            
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        height: "60%",
        width: "100%",
        backgroundColor: "#00A19D",
        padding: 0,
        margin: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    }
    ,
    card_content: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Verdana',
    }
    ,
    sub_head: {
        fontWeight: '800',
    }
    ,
    p__text: {
        margin: '20px',
        fontSize: 18,
        textAlign: 'center'
    }
    ,
  
})

// primary #95DAC1
// secondary #00A19D
// teritiary #6F69AC