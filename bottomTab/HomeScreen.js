import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CurrentLocationScreen from './CurrentLocationScreen';
import MedicationScreen from './MedicationScreen';


export default function HomeScreen() {
  const handleMedicationPress = () => {
    navigation.navigate('MedicationScreen');
  };

  const handleCurrentLocationPress = () => {
    navigation.navigate('CurrentLocationScreen');
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image
        source={{ uri: 'https://velog.velcdn.com/images/thgus05061/post/8fc7c151-1246-417d-90ff-dcc84c6f5ca8/image.png' }}
        style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>안녕하세요 <Text style={styles.nameText}>'약속'</Text>님</Text> 
        </View>
        <View style={styles.text2Container}>
          <Text style={styles.text2}>무엇을 도와드릴까요?</Text>
        </View>
        
        <View style={styles.medicationContainer}>
          <Image
          source={{ uri: 'https://velog.velcdn.com/images/thgus05061/post/c06d7d1e-2ede-442d-9f36-eca20bfd183f/image.png' }}
          style={styles.medicineImage}
          />
          <TouchableOpacity onPress={handleCurrentLocationPress}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxTextName}>투여하는 약</Text>
            <Text style={styles.boxText}>
              투약하는 약을{'\n'}
              열람하고{'\n'}
              추가 또는 삭제합니다.
            </Text>
          </View>
        </TouchableOpacity>

        </View>
        <View style={styles.hospitalMapContainer}>
          <Image
          source={{ uri: 'https://velog.velcdn.com/images/thgus05061/post/08a7e6cc-9d9c-47c5-888f-a2e4c75c4b7c/image.png' }}
          style={styles.hospitalMapImage}
          />
          <TouchableOpacity onPress={handleMedicationPress}>
          <View style={styles.boxContainer}>
          <Text style={styles.boxTextName2}>주변 병원 지도</Text>
            <Text style={styles.boxText2}>
              내 위치에 맞는{'\n'}
              병원 또는 약국을{'\n'}
              추천받습니다.</Text>
          </View>
          </TouchableOpacity>
        
        </View>
        
        <Text style={styles.text3}>선택해주세요!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5484FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 440,
    height: 230,
  },
  textContainer: {
    position: 'absolute',
    top: 76, // 텍스트의 Y 좌표 값 조정
    //left: 109, // 텍스트의 X 좌표 값 조정
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C386E',
    textAlign: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFB800', // "약속" 단어의 색상 변경
  },
  text2Container:{
    position: 'absolute',
    top: 99, // 텍스트의 Y 좌표 값 조정
    //left: 77, // 텍스트의 X 좌표 값 조정
    textAlign: 'center',
  },
  text2:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1C386E',
  },
  boxContainer: {
    width: 290,
    height: 159,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    top: 30, // 텍스트의 Y 좌표 값 조정
    left: -50, // 텍스트의 X 좌표 값 조정
    zIndex:0,
  },
  boxTextName:{
    fontSize:18,
    fontStyle:"normal",
    fontWeight:"700",
    color:"#1C386E",
    top: -17, // 텍스트의 Y 좌표 값 조정
    left: 20, // 텍스트의 X 좌표 값 조정
  },
  boxText:{
    fontSize:14,
    color:"#1C386E",
    fontStyle:"normal",
    fontWeight:"500",
    top:-5, // 텍스트의 Y 좌표 값 조정
    left: 50, // 텍스트의 X 좌표 값 조정
    textAlign: 'left',
  },
  medicineImage:{
    width: 160,
    height: 160,
    top: 29.29, // 텍스트의 Y 좌표 값 조정
    left: 57, // 텍스트의 X 좌표 값 조정
    zIndex:1,
  },
  medicationContainer:{
    flexDirection:'row',
    top: -3, // 텍스트의 Y 좌표 값 조정
    //left: -4, // 텍스트의 X 좌표 값 조정
    textAlign: 'center',
  },


  hospitalMapContainer:{
    flexDirection:'row',
    top: 17, //Y 좌표 값 조정
    left: -4, // X 좌표 값 조정
    textAlign: 'center',
  },
  hospitalMapImage:{
    width: 160,
    height: 160,
    top: 29.29, // 텍스트의 Y 좌표 값 조정
    left: 57, // 텍스트의 X 좌표 값 조정
    zIndex:1,
  },
  boxContainer2:{
    width: 290,
    height: 159,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    top: 30, // 텍스트의 Y 좌표 값 조정
    left: -50, // 텍스트의 X 좌표 값 조정
    zIndex:0,
  },
  boxTextName2:{
    fontSize:18,
    fontStyle:"normal",
    fontWeight:"700",
    color:"#1C386E",
    top: -17, // 텍스트의 Y 좌표 값 조정
    left: 35, // 텍스트의 X 좌표 값 조정
  },

  boxText2:{
    fontSize:14,
    color:"#1C386E",
    fontStyle:"normal",
    fontWeight:"500",
    top:-5, // 텍스트의 Y 좌표 값 조정
    left: 40, // 텍스트의 X 좌표 값 조정
    textAlign: 'left',

  },
  text3:{
    color: "#FFE500",
    alignItems:"center",
    fontSize: 26,
    //fontFamily:"Noto Sans KR",
    fontStyle:"normal",
    fontWeight:"700",
    //lineHeight:"normal",
    top: 70, //Y 좌표 값 조정
    //left: 30, // X 좌표 값 조정
    textAlign: 'center',

  },


});
