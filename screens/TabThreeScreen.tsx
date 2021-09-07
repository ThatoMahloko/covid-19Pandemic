import React, { useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, TextInput, Title } from 'react-native-paper';
import StatsCard from '../components/StatsCard';
import { FcGlobe } from "react-icons/fc";

export default function TabThreeScreen() {
    const [getCity, setCity] = useState('');
    const [getStats, setStats] = useState('');
    // async function covidState() {
    //     const data = await fetch(`https://coronavirus-19-api.herokuapp.com/all`)
    //         .then((res) => res.json)
    //         .then((data) => data)
    //     console.log(data)
    //     setStats(data);
    // }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#FDD2BF" }}>
            <StatsCard />
            <View style={styles.stats_content}>
                <Title>{"WORLD WIDE COVID STATS"}</Title>
                <FcGlobe style={{ height: '100px', width: '100px', marginTop: '20', marginBottom: "40" }} />
            </View>
        </ScrollView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        height: "100%"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        // marginVertical: 30,
        // height: 1,
        // width: '80%',
    },
    stats_content: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        backgroundColor: "#FDD2BF",
    }
});