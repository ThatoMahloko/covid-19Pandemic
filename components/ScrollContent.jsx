import React from 'react'
import { View, Text, StyleSheet, ScrollView, } from 'react-native'
import { BiDna, BiDonateBlood, BiUserMinus, BiUser, BiMoveHorizontal } from "react-icons/bi";
import { FaBriefcaseMedical } from "react-icons/fa";
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { GiBroom } from "react-icons/gi";
// RiVirusLine
import { GiSyringe } from "react-icons/gi";
export default function ScrollContent() {
    let paragraph1 //= "Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.";
    let paragraph2 //= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, minima?";
    let paragraph3 //= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, minima?";
    let paragraph4 //= "Avoid close contact with people who are sick. If possible, maintain 6 feet between the person who is sick and other household members.";
    let paragraph5 //= "Authorized COVID-19 vaccines can help protect you from COVID-19. You should get a COVID-19 vaccine as soon as you can. Once you are fully vaccinated, you may be able to start doing some things that you had stopped doing because of the pandemic."
    let paragraph6 //= "Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of COVID-19.Especially important if you are running essential errands, going into the office or workplace, and in settings where it may be difficult to keep a physical distance of 6 feet. Take your temperature if symptoms develop. Don’t take your temperature within 30 minutes of exercising or after taking medications that could lower your temperature, like acetaminophen. Follow CDC guidance if symptoms develop."
    let paragraph7 //= "Clean high touch surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks. If someone is sick or has tested positive for COVID-19, disinfect frequently touched surfaces. Use a household disinfectant product from EPA’s List N: Disinfectants for Coronavirus (COVID-19)external icon according to manufacturer’s labeled directions. If surfaces are dirty, clean them using detergent or soap and water prior to disinfection."
    return (

        // <>
             <View style={styles.container}>    
            <View style={styles._prevent_item_text}>
                <BiDonateBlood style={{ margin: 10, height: 40, width: 40, marginBottom: 0 }} />
                <h5 style={{ marginTop: 0, margin: 0 }}>Sanitise </h5> {/*Wash your hands often.*/}
                {/* <Paragraph style={styles._prevent_item_text}>{paragraph1}</Paragraph> */}
            </View>
            <View style={styles._prevent_item_text}>
                <View style={styles.iconSideBySide}>
                    <BiUser style={{ marginRight: 0, margin: 10, height: 40, width: 40, marginBottom: 0 }} />
                    {/* <BiMoveHorizontal style={{ marginLeft: 0, marginRight: 0, margin: 20, marginTop: 20, height: '30px', width: '30px' }} /> */}
                    {/* <BiUser style={{ marginLeft: 0, margin: 0, height: '60px', width: '60px' }} /> */}
                </View>
                <h5 style={{ marginTop: 0, margin: 0 }}>Social</h5>
                <h5 style={{ marginTop: 0, margin: 0 }}>Distance</h5>{/*Stay 6 feet away from others*/}
                {/* <Paragraph style={styles._prevent_item_text}>{paragraph4}</Paragraph> */}
            </View>
            <View style={styles._prevent_item_text}>
                <GiSyringe style={{ margin: 10, height: 40, width: 40, marginBottom: 0 }} />
                <h5 style={{ marginTop: 0, margin: 0 }}>Vaccinate</h5>
                {/* <Paragraph style={styles._prevent_item_text}>{paragraph5}</Paragraph> */}
            </View>
            <View style={styles._prevent_item_text}>
                <FaBriefcaseMedical style={{ margin: 10, height: 40, width: 40, marginBottom: 0 }} />
                <h5 style={{ marginTop: 0, margin: 0 }}>Monitor</h5>{/*Monitor your health daily*/}
                <h5 style={{ marginTop: 0, margin: 0 }}>Health</h5>{/*Monitor your health daily*/}
                {/* <Paragraph style={styles._prevent_item_text}>{paragraph6}</Paragraph> */}
            </View>
            <View style={styles._prevent_item_text}>
                <GiBroom style={{ margin: 10, height: 40, width: 40, marginBottom: 0 }} />
                <h5 style={{ marginTop: 0, margin: 0 }}>Clean and disinfect</h5>
                {/* <Paragraph style={styles._prevent_item_text}>{paragraph7}</Paragraph> */}
            </View>
            </View>
        // </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row', 
        opacity: 1, 
        marginBottom: 0,
    }
    ,
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
    ,
    separator: {
        // marginVertical: 30,
        // height: 1,
        // width: '80%',
    }
    ,
    tab_icon: {
        height: '160px',
        width: '160px',
        marginTop: '20'
    }
    ,
    tab_prevent_container: {
        display: 'flex',
        flexDirection: 'row'
    }
    ,
    _prevent_item_text: {
        alignItems: 'center',
        textAlign: 'center',
        width: 90,
        marginTop: "2",
        backgroundColor:"#FFE194",
        margin: 10, 
        height: 90,
        borderRadius:80
    }
    ,
    iconSideBySide: {
        display: 'flex',
        flexDirection: 'row',
    }
})
