import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { BiUserMinus, BiUser, BiMoveHorizontal } from "react-icons/bi";
import { FaBriefcaseMedical,FaHome } from "react-icons/fa";
import { GiBroom } from "react-icons/gi";
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CardComp from '../components/CardComp';
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { BiDna, BiDonateBlood } from "react-icons/bi";
import ScrollContent from '../components/ScrollContent';
import { BiAnalyse } from "react-icons/bi";
import { cloneNode } from '@babel/types';
import { RiVirusLine } from "react-icons/ri";


export default function TabOneScreen({ navigation }, props: RootTabScreenProps<'TabOne'>) {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <CardComp
          title_card="COVID-19"
          subhead_card="What is it?"
          paragraph_card="If you are feeling sick, ensure that you get a COVID-19 test for your protection and those around you."
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={true} style={{ marginBottom: 0 }}>
        <ScrollContent />
      </ScrollView>
      <Card style={styles.do_test}>
        <BiAnalyse style={{ width: 80, height: 80, margin: 'auto', color: 'white' }} />
        <Title style={styles.test_content}>Do Your Own Test </Title>
      </Card>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "#fff"
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
  scrollcont_view: {
    justifyContent: 'center'
  }
  ,
  do_test: {
    backgroundColor: "#22577A",
    width: "100%",
    height: 170,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  test_content: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  }
  ,

});

// FaHome
