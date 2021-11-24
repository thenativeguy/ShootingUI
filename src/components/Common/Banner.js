import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {LAYOUT} from '../../layout';

const Banner = () => {
  return (
    <View>
      <Image source={LAYOUT.BANNER.BANNER} style={{resizeMode: 'contain'}} />
      <Text
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginVertical: LAYOUT.HEIGHT*0.009,
          color: '#000',
          fontFamily: LAYOUT.FONTS.BOLD,
          fontSize: 22,
        }}>
        Sentido Sports Tech
      </Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
