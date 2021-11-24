import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { LAYOUT } from '../../layout';

const Background = ({children}) => {
  return (
    <ImageBackground
      source={LAYOUT.BACKGROUND}
      style={styles.bgStyle}>
      {children}
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  bgStyle: {
    width: LAYOUT.WIDTH,
    height: LAYOUT.HEIGHT,    
  },
});
