import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { FcHighPriority } from "react-icons/fc";
import { IoIosCall } from "react-icons/io";
import { FaComment } from "react-icons/fa";
export default function CardComp(props) {
    return (
        <Card style={styles.card}>
            <View style={styles.card_content}>
                <Title>{props.title_card}</Title>
                <Subheading style={styles.sub_head}>{props.subhead_card}</Subheading>
                <Paragraph style={styles.p__text}>{props.paragraph_card}</Paragraph>
            </View>
            {/* <View style={styles.card_content}>
                <FcHighPriority style={{ height: '160px', width: '160px', marginTop: '20' }} />
            </View> */}

            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button_opacity_call}><Text style={styles.button_text}>Call Now</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button_opacity_msg}><Text style={styles.button_text}>Send SMS</Text></TouchableOpacity>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 200,
        width: "100%",
        backgroundColor: "#00A19D",
        padding: 0,
        margin: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 100,
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
    button_opacity_call:{
        backgroundColor: "#FF0000", 
        margin: 5, 
        width: 140, 
        height: 35, 
        borderRadius: 80,
        flexDirection: 'row', 
        textAlign: 'center', 
        justifyContent: 'center', 
        paddingTop: 2
    }
    ,
    button_opacity_msg:{
        backgroundColor: "#290FBA",
        margin: 5, 
        width: 140, 
        height: 35, 
        borderRadius: 80,
        flexDirection: 'row', 
        textAlign: 'center', 
        justifyContent: 'center', 
        paddingTop: 2
    }
    ,
    button_text:{
        color: "#fff", 
        fontSize: 20
    }
})

// primary #95DAC1
// secondary #00A19D
// teritiary #6F69AC