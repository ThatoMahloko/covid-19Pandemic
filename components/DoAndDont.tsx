import React from 'react';
import { GiGasMask, GiFamilyHouse, GiPathDistance, GiSoap, GiMedicalPack } from "react-icons/gi";
import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { Card, Title, Subheading } from 'react-native-paper';

export default function DoAndDont() {
    return (
        <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View>
                    <View style={styles.view_Container}>
                        <GiGasMask style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Wear a mask!!"}
                    </Subheading>
                </View>

                <View>
                    <View style={styles.view_Container}>
                        <GiFamilyHouse style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Lockdown!!"}
                    </Subheading>
                    
                </View>

                <View>
                    <View style={styles.view_Container}>
                        <GiPathDistance style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Social Distance"}
                    </Subheading>
                </View>

                <View>
                    <View style={styles.view_Container}>
                        <GiSoap style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Soap Wash!!"}
                    </Subheading>
                </View>

                <View>
                    <View style={styles.view_Container}>
                        <GiMedicalPack style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Monitor Health"}
                    </Subheading>
                </View>

                <View>
                    <View style={styles.view_Container}>
                        <FaPrescriptionBottleAlt style={{ margin: 20, height: '60px', width: '60px' }} />
                    </View>
                    <Subheading style={styles.sub__Title}>
                        {"Take Vitamins"}
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
    sub__Title: {
        marginTop: 20,
        margin: 'auto',
        justifyContent: 'center',

    }
})


