import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, TextInput, Title, Card, Subheading } from 'react-native-paper';
import StatsCard from '../components/StatsCard';
import { FcGlobe } from "react-icons/fc";
import { GiDeathSkull, GiHealthPotion } from "react-icons/gi";
import { IoMdPulse } from "react-icons/io";
import OverallStats from '../components/OverallStats';
import Cards from '../components/Cards';
import { FlatList } from 'react-native-gesture-handler';
import ItemRows from '../components/ItemRows';
export default function TabThreeScreen() {

    const url = "https://api.covid19api.com/summary";
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        const fetchCovidData = async () => {
            setIsLoading(true)
            try {
                const result = await fetch(url);
                const response = await result.json();
                console.log(response, 'response');
                setData(response)
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#FDD2BF" }}>
            <StatsCard />
            <View style={styles.stats_content}>
                <Title>{"COVID STATS"}</Title>
                <FcGlobe style={{ height: '100px', width: '100px', marginTop: '20', marginBottom: "40" }} />
            </View>
            {/* 
            <Cards 
            number = {data ? data.Global.TotalConfirmed : 0}
            /> */}

            {/* <GiDeathSkull style={{marginRight:"20"}}/> */}
            <View style={styles.cards_Container}>
                <Card style={styles.card}>
                    <Title style={{ margin: 'auto' }}>Total Cases</Title>
                    <IoMdPulse style={{ margin: 'auto', color: "white", height: "60", width: "60" }} />
                    <Title style={{ margin: 'auto' }}>{data ? data.Global.TotalConfirmed : 0}</Title>
                </Card>
                <Card style={styles.card_Death}>
                    <Title style={{ margin: 'auto' }}>Total Deaths</Title>{/*#BB8760 */}
                    <GiDeathSkull style={{ margin: 'auto', color: "red", height: "60", width: "60" }} />
                    <Title style={{ margin: 'auto' }}>{data ? data.Global.TotalDeaths : 0}</Title>
                </Card>
            </View>
            <Card style={styles.card_reocover}>
                <Title style={{ margin: 'auto' }}>Total Recovery</Title>
                <GiHealthPotion style={{ margin: 'auto', color: "green", height: "60", width: "60" }} />
                <Title style={{ margin: 'auto' }}>{data ? data.Global.TotalRecovered : 0}</Title>
            </Card>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FDD2BF"}}>
                    <Text style={styles.cases_heading}>Covid Cases by region</Text>
                </View>
                <View style={{backgroundColor: "#FDD2BF"}}>
                    <FlatList 
                    data={data && data.Countries ? data.Countries : 0} 
                    renderItem={({item})=> <ItemRows item={item}/>}/>
                </View>
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
    ,
    card: {
        height: 100,
        width: "45%",
        backgroundColor: "#6B7AA1",
        padding: 0,
        margin: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingBottom: 0,
        justifyContent: "space-around"
    }
    ,
    card_Death: {
        height: 100,
        width: "45%",
        backgroundColor: "#BB8760",
        padding: 0,
        margin: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingBottom: 0,
        justifyContent: "space-around"
    }
    ,
    card_content: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Verdana',
        backgroundColor: "#6B7AA1",

    }
    ,
    sub_head: {
        fontWeight: '800',
    }
    ,
    cards_Container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "#FDD2BF",
        justifyContent: 'space-around'
    }
    ,
    icon: {
        color: "#fff",
        margin: 'auto'
    }
    ,
    card_reocover: {
        height: 100,
        width: "100%",
        backgroundColor: "#7FC8A9",
        marginTop: 20,
        marginBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    }
    ,
    cases_heading:{
        color:'#000',
        fontSize: 20, 
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop:30
    }
});