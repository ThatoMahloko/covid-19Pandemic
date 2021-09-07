import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { AiOutlineFileProtect, AiOutlineFileExcel } from "react-icons/ai";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import WarningCard from '../components/WarningCard';
import DoAndDont from '../components/DoAndDont';
import DoStuff from '../components/DoStuff';
export default function TabTwoScreen() {
  return (

    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#F0D9FF' }} >
      <WarningCard />
      <View style={styles.head__content}>
        <Title >{"Covid-19 Do's"}</Title>
        <AiOutlineFileProtect style={{ margin: 20, height: '60px', width: '60px' }} />
      </View>
        <DoAndDont />
        <hr/>
        <View style={styles.head__content}>
        <Title >{"Covid-19 Dont's"}</Title>
        <AiOutlineFileExcel style={{ margin: 20, height: '60px', width: '60px' }} />
      </View>
      <DoStuff />
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
  ,
  head__content: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0D9FF',
    marginBottom: 10,
  }
});

// primary #95DAC1
// secondary #00A19D
// teritiary #6F69AC
// 57CC99