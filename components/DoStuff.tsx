import React from 'react';
import { GiGasMask } from "react-icons/gi";
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { Card, Title, Subheading } from 'react-native-paper';

export default function DoStuff() {
    return (
        <ScrollView>
            <ScrollView horizontal={true}>
            <View style={styles.view_Container}>
                <GiGasMask style={{ margin: 20, height: '60px', width: '60px' }} />
                <Subheading>
                    {"Wear a mask!!"}
                </Subheading>
            </View>

            <View style={styles.view_Container}>
                <GiGasMask style={{ margin: 20, height: '60px', width: '60px' }} />
                <Subheading>
                    {"Wear a mask!!"}
                </Subheading>
            </View>

            <View style={styles.view_Container}>
                <GiGasMask style={{ margin: 20, height: '60px', width: '60px' }} />
                <Subheading>
                    {"Wear a mask!!"}
                </Subheading>
            </View>

            <View style={styles.view_Container}>
                <GiGasMask style={{ margin: 20, height: '60px', width: '60px' }} />
                <Subheading>
                    {"Wear a mask!!"}
                </Subheading>
            </View>

            <View style={styles.view_Container}>
                <GiGasMask style={{ margin: 20, height: '60px', width: '60px' }} />
                <Subheading>
                    {"Wear a mask!!"}
                </Subheading>
            </View>

            <View style={styles.view_Container}>
                <GiGasMask style={{ margin: 20, height: '60px', width: '60px' }} />
                <Subheading>
                    {"Wear a mask!!"}
                </Subheading>
            </View>

            <View style={styles.view_Container}>
                <GiGasMask style={{ margin: 20, height: '60px', width: '60px' }} />
                <Subheading>
                    {"Wear a mask!!"}
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
    do_dont_content:{
        justifyContent: 'center',
        textAlign: 'center'
    }
    ,
    view_Container:{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0D9FF', 
        marginLeft: 5,
        marginRight: 5,
     }
})

