import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'JosefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
    'JosefinSans-Medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
  });
};