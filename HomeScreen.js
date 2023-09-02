import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import { loadFonts } from './FontLoader';



const HomeScreen = () => {
    const navigation = useNavigation();
    const [isFontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadAsync = async () => {
      await loadFonts();
      setFontLoaded(true);
    };

    loadAsync();
  }, []);

  if (!isFontLoaded) {
    return null; // Or render a loading screen
  }
    return (
        <SafeAreaView style = {{
            flex: 1,
            backgroundColor: "#0086d1",
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <View style= {{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '80%',
            marginBottom: 10,
        }}>
            <SvgIcon/>
            <SvgIcon2/>
            <SvgIcon3/>
        </View>
            <Text style= {{
                fontFamily: 'JosefinSans-Bold',
                fontWeight: 600,
                fontSize: 80,
                color: 'white',
                textAlign: 'center',
                marginBottom: 50,
                marginTop: 50,
            }}>SAT Practice</Text>
            <Pressable
            onPress={() => navigation.navigate("SAT: Math Section")}
                style={{
                    paddingVertical: 11,
                    paddingHorizontal: 22,
                    borderRadius: 15,
                    backgroundColor: '#EECA3B',
                    position: 'relative',
                    zIndex: 0,
                    userSelect: 'none',
                    touchAction: 'manipulation',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 40,
                }}>
                <Text style = {{color: 'white', fontWeight:'600', fontSize: 25, textAlign: 'center'}}>Start</Text>
            </Pressable>
        </SafeAreaView>
    )
}
const SvgIcon = ({ style }) => {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width={100} height={100} fill="white" style={style}>
        <Path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z" />
      </Svg>
    );
  };
const SvgIcon2 = ({ style }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 22 24" width={100} height={100} fill="white"><Path d="M2 2v4h4V2H2zm0-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm12 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v4h4V2h-4zm0 10h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2v4h4v-4h-4zM2 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2v4h4v-4H2z"></Path></Svg>
    );
  };
const SvgIcon3 = ({ style }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 22 24" width={100} height={100} fill="white"><Path d="M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 0 1 3.535 0z"></Path></Svg>
    );
  };

export default HomeScreen
