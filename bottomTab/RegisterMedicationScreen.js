import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';

const RegisterMedicationScreen = () => {
  const [medicationName, setMedicationName] = useState('');

  const renderBox = ({ item }) => {
    if (item.id === 'box1') {
      return (
        <>
  <View style={styles.box1}>
    <View style={{ flexDirection: "row" ,left:28}}>
      <Text style={styles.boxText1}>약 이름:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="약 이름을 입력하세요"
        onChangeText={text => setMedicationName(text)}
        value={medicationName}
      />
    </View>


    <View style={{ flexDirection: "row" ,left:28,top:10}}>
    <Text style={styles.boxText1}>투약 시간:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="시간을 입력하세요"
        onChangeText={text => setMedicationName(text)}
        value={medicationName}
      />
    </View>

  </View>
</>
      );
    } else if (item.id === 'box2') {
      return (
        <View style={styles.box2}>
          <Text style={styles.boxText2}>등록 완료!</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://velog.velcdn.com/images/thgus05061/post/8fc7c151-1246-417d-90ff-dcc84c6f5ca8/image.png",
              width: 440,
              height: 220,
            }}
          />
          <Text style={styles.headerText}>
            새로운 약<Text style={styles.headerInnerText}> 추가</Text>하기
          </Text>
          <Image
            source={{
              uri: "https://velog.velcdn.com/images/thgus05061/post/f0a2a9d0-a84a-4a4e-9d75-658153d2ec1f/image.png",
              width: 343,
              height: 343,
            }}
          />
          <FlatList
            data={[{ id: 'box1' }, { id: 'box2' }]}
            renderItem={renderBox}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContentContainer}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#5181FF',
    paddingBottom: 20,
  },
  headerText: {
    color: '#1C386F',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    marginTop: -100,
    marginBottom: 20,
  },
  headerInnerText: {
    color: '#FFB800',
  },
  flatListContentContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  box1: {
    width: 331,
    height: 164,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 339,
    height: 49,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5181FF',
  },
  textInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor:"#FFFF",
    top:-6,
    width:200,
  },
});

export default RegisterMedicationScreen;