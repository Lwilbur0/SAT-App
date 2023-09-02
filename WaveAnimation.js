import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CloudWaveAnimation = ({ opacity, speed, isReverse }) => {
  const waveAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(waveAnimation, {
        toValue: isReverse ? -2 : 2,
        duration: speed,
        useNativeDriver: true,
      })
    ).start();
  }, [waveAnimation, speed, isReverse]);

  const waveStyle = {
    opacity: opacity,
    transform: [
      {
        translateX: waveAnimation.interpolate({
          inputRange: isReverse ? [-1, 0, 1] : [0, 1],
          outputRange: isReverse
            ? [-Dimensions.get('window').width, 0, Dimensions.get('window').width]
            : [0, Dimensions.get('window').width],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.wave, waveStyle]}>
      <Svg width="5000%" height="100%">
        <Path
        d="M0 40 C40 20, 60 70, 100 40 S140 60, 200 40 S260 10, 300 40 S340 30, 400 40 V100 H0 Z"
        fill="#0086d1"
        />
      </Svg>
    </Animated.View>
  );
};

const CloudAnimation = () => {
  return (
    <View style={styles.container}>
      <CloudWaveAnimation opacity={0.5} speed={8000} isReverse={true} />
      <CloudWaveAnimation opacity={0.2} speed={6000} isReverse={false} />
      <CloudWaveAnimation opacity={1} speed={4000} isReverse={false} />
      <CloudWaveAnimation opacity={0.7} speed={10000} isReverse={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    position: 'absolute',
    top: 0,
    width: 3500,
    height: 100,
  },
});

export default CloudAnimation;
