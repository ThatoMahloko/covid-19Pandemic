import React from 'react';
import { GiGasMask, GiPartyPopper, GiWineBottle, GiAlarmClock, GiCycle } from "react-icons/gi";
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { Card, Title, Subheading } from 'react-native-paper';

export default function DoStuff() {
    return (
        <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View>
                    <View style={styles.view_Container}>
                        <GiPartyPopper style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Social Parties"}
                    </Subheading>
                </View>

                <View>
                    <View style={styles.view_Container}>
                        <GiWineBottle style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Sale of Alcohol"}
                    </Subheading>
                </View>

                <View>
                    <View style={styles.view_Container}>
                        <GiAlarmClock style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Disobey Curfew"}
                    </Subheading>
                </View>

                <View>
                    <View style={styles.view_Container}>
                        <GiCycle style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Dispose Masks"}
                    </Subheading>
                </View>
               
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    card_content: {
        justifyContent: 'center',
        textAlign: 'center'
    }
    ,
    card_container: {
        justifyContent: 'center',
        textAlign: 'center'
    }
    ,
    do_dont_content: {
        justifyContent: 'center',
        textAlign: 'center'
    }
    ,
    view_Container: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        width: 120,
        height: 120,
        borderRadius: 60
    }
    ,
    sub__Title:{
        marginTop: 20,
        margin:'auto', 
        justifyContent: 'center'
    }
})

