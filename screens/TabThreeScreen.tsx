import React, { useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, TextInput, Title } from 'react-native-paper';
import StatsCard from '../components/StatsCard';
import { FcGlobe } from "react-icons/fc";
import OverallStats from '../components/OverallStats';

export default function TabThreeScreen() {
   
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#FDD2BF" }}>
            <StatsCard />
            <View style={styles.stats_content}>
                <Title>{"COVID STATS"}</Title>
                <FcGlobe style={{ height: '100px', width: '100px', marginTop: '20', marginBottom: "40" }} />
            </View>
            <OverallStats />
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