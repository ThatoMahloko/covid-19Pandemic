import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CardComp from '../components/CardComp';
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { BiDna, BiDonateBlood } from "react-icons/bi";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  let paragraph1 = "Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.";
  let paragraph2 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, minima?";
  let paragraph3 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, minima?";
  return (
<SafeAreaView>
<View style={styles.container}>
      <CardComp
        title_card="COVID-19"
        subhead_card="What is it?"
        paragraph_card="If you are feeling sick, ensure that you get a COVID-19 test for your protection and those around you."
      />
      <BiDna style={{ height: '60px', width: '60px', marginTop: '20', color: "#95DAC1" }} />
      <Title style={styles.title}>{"PREVENTION"}</Title>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={true} horizontal={true} style={styles.tab_prevent_container}>
        <View style={styles._prevent_item_text}>
          <BiDonateBlood style={{margin:20, height: '60px', width: '60px'}}/>
          <h3 style={{ marginTop: 0, margin: 0 }}>Wash your hands often.</h3>
          <Paragraph style={styles._prevent_item_text}>{paragraph1}</Paragraph>
        </View>
        
        

      </ScrollView >

    </View>
</SafeAreaView>
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
});
