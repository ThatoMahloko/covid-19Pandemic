import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import WarningCard from '../components/WarningCard';

export default function TabTwoScreen() {
  return (

    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#F0D9FF'}} >
      <WarningCard />
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

// primary #95DAC1
// secondary #00A19D
// teritiary #6F69AC
// 57CC99