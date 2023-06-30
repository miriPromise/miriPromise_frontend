import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from "../components/header";
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const MedicationScreen = () => {
  const [currentDate, setCurrentDate] = useState(null);
  const navigation = useNavigation(); // Navigation 객체 가져오기

  useEffect(() => {
    const date = new Date();
    const formattedDate = format(date, "MMMM d일 EEEE", { locale: ko });
    setCurrentDate(formattedDate);
  }, []);

  const handleMedicineImagePress = () => {
    // 이미지 클릭 시 다른 페이지로 이동
    navigation.navigate('RegisterMedicationScreen'); 
  };

  const handleDeleteImagePress = () => {
    // 이미지 클릭 시 다른 페이지로 이동
    navigation.navigate('DeleteMedicine'); // 이동할 페이지의 이름으로 변경해주세요
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        {currentDate && (
          <Text style={styles.nameText}>
            오늘은{' '}
            <Text style={styles.text}>{currentDate}</Text>
            {'입니다.'}
          </Text>
        )}
        <View style={styles.imagesContainer}>
          <TouchableOpacity onPress={handleMedicineImagePress}>
            <Image
              source={{ uri: 'https://velog.velcdn.com/images/thgus05061/post/be9a6a29-a84d-455f-afc5-1eb923a962b4/image.png' }}
              style={styles.medicineImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDeleteImagePress}>
            <Image
              source={{ uri: 'https://velog.velcdn.com/images/thgus05061/post/5eee6729-5244-48e3-a37d-6f1a53c836d1/image.png' }}
              style={styles.deleteImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textBottom1}>투약할 약 추가하기</Text>
          <Text style={styles.textBottom2}>기존 약 삭제하기</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5484FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameText: {
    color: '#1C386F',
    textAlign: 'center',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    top: -500,
  },
  text: {
    color: '#FFB800',
  },
  imagesContainer: {
    flexDirection: 'row',
    top: -200,
  },
  medicineImage: {
    width: 81,
    height: 81,
    marginRight: 140,
  },
  deleteImage: {
    width: 81,
    height: 81,
  },
  textContainer: {
    flexDirection: 'row',
    top: -180,
  },
  textBottom1: {
    marginRight: 50,
    color: "#FFFF",
    fontWeight: 700,
    fontSize: 14,
  },
  textBottom2: {
    marginLeft: 60,
    color: "#FFFF",
    fontWeight: 700,
    fontSize: 14,
  },
});

export default MedicationScreen;
