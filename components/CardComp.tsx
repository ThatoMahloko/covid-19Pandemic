import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            <View style={styles.card_content}>
                <FcHighPriority style={{ height: '160px', width: '160px', marginTop: '20' }} />
            </View>

            <View style={styles.button_container}>
                <View style={styles.container_contenet}><Button mode="contained" style={styles.buttons_call}><IoIosCall style={{width: '30', height: '30'}}/><Text style={styles.text_in_btn}>Call Now</Text></Button></View>
                <View style={styles.container_contenet}><Button mode="contained" style={styles.buttons_sms}><FaComment style={{width: '30', height: '30'}}/><Text style={styles.text_in_btn}>Send Sms</Text></Button></View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        height: "20%",
        width: "100%",
        backgroundColor: "#00A19D",
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
    button_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 'auto',
        padding: 'auto'
    },
    buttons_call: {
        backgroundColor: "#B61919",
        margin: 5,
        borderRaduis: 60,
        height: 50,
        justifyContent: 'center',
        width: 200,
        borderRadius: 90,
        marginTop: 20
    }
    ,
    buttons_sms: {
        backgroundColor: "#290FBA",
        margin: 5,
        borderRaduis: 60,
        height: 50,
        justifyContent: 'center',
        width: 200,
        borderRadius: 90,
        marginTop: 20
    }
    ,   
    text_in_btn: {
        // marginLeft: 10,
        // marginBottom: 50,
        margin: 'auto'
    }
    ,
    container_contenet: {
        justifContent: 'center'
    }
    
})

// primary #95DAC1
// secondary #00A19D
// teritiary #6F69AC