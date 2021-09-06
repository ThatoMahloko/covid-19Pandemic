import React from 'react'
import { Card, Title, Subheading } from 'react-native-paper';
import { ScrollView, StyleSheet, } from 'react-native';
import { AiOutlineFileProtect } from "react-icons/ai";
import { View } from './Themed';
import { GiGasMask } from "react-icons/gi";

export default function DoAndDont() {
    return (
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
