import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

const ItemRows = ({ item }) => {
    return (

        // <View style={styles.rows}>
        <>
            <Card style={{
                flexDirection: 'row',
                backgroundColor: "#FF6B6B",
                marginBottom: 10,
                marginTop: 10,
                textAlign: 'center',
                borderRadius: 20
            }}>

                <Image
                    source={{ uri: `https://www.countryflags.io/${item.CountryCode}/flat/64.png` }}
                    style={styles.flag}
                />


                <Text style={styles.countryName}>{item.Country}</Text>
                <Text style={styles.totalCases}>{item.TotalConfirmed}</Text>
            </Card>
        </>
        /* </View> */
    )
}

export default ItemRows;

const styles = StyleSheet.create({
    rows: {
        width: '100%',
        marginTop: 10,
        marginBottom: 8,
        padding: 10,
        backgroundColor: "#7FC8A9",
    }
    ,
    countryName: {
        fontSize: 20,
        fontWeight: 'bold',
    }
    ,
    totalCases: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        color: "white"
    },
    flag: {
        height: 30,
        width: 40,
        padding: 10,
        borderRadius: 1000,
        margin: 'auto'
    }
})

