import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Subheading, Button } from 'react-native-paper';

export default function OverallStats() {
    // const [getInfo, setInfo] = useState({});
    // const [getStats, setStats] = useState('');
    // const [errorMessage, errMessage] = useState(['']);

    // console.log(Element)
    // async function covidState() {
    //     const data = fetch(`https://coronavirus-19-api.herokuapp.com/countries/South%20Africa`)
    //         .then(response => response.json())
    //         .then(data => setInfo(data));

    //     for (const key in getInfo) {
    //         console.log(object[key]);
    //     }
    //     // console.log(getInfo)

// }



return (
    <ScrollView>
        <Card style={styles.card}>
            <View style={styles.card_content}>
                <Title style={{ margin: 'auto' }}>{"COVID-19"}</Title>
                <Subheading style={styles.sub_head}>{"Worldwide Stats"}</Subheading>
            </View>
           
            <View>
            {/* <Cards 
            number = {data ? data.Global.TotalConfirmed : 0}
            /> */}
            </View>
        </Card>
    </ScrollView>
)
}
const styles = StyleSheet.create({
    card: {
        height: 300,
        width: "100%",
        backgroundColor: "#6B7AA1",
        padding: 0,
        margin: 0,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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
})
