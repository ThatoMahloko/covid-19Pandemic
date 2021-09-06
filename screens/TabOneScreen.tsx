import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CardComp from '../components/CardComp';
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { BiDna, BiDonateBlood } from "react-icons/bi";
import ScrollContent from '../components/ScrollContent';

export default function TabOneScreen({ navigation }, props: RootTabScreenProps<'TabOne'>) {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>


      <View style={styles.container}>
        {/* <View >  */}
          <CardComp style={styles.top__card}
            title_card="COVID-19"
            subhead_card="What is it?"
            paragraph_card="If you are feeling sick, ensure that you get a COVID-19 test for your protection and those around you."
          />
        {/* </View> */}
        <BiDna style={{ height: '60px', width: '60px', marginBottom: '40', color: "#95DAC1" }} />
        <Title style={styles.title}>{"PREVENTION"}</Title>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollContent />
   
        </ScrollView>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
    width: 200,
    marginTop: "2"
  }
  ,
  top__card: {
    height: 0
  }
});
