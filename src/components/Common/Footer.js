import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { LAYOUT } from '../../layout';

const Footer = ({logo}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Image
        source={LAYOUT.FOOTER.GALLERY}
        style={{width: 30, height: 30, resizeMode: 'contain'}}
      />
      {logo && (
        <Image
          source={LAYOUT.LOGO.LOGO}
          style={{width: LAYOUT.WIDTH * 0.5, resizeMode: 'contain'}}
        />
      )}
      <Image
        source={LAYOUT.FOOTER.VOLUME}
        style={{width: 30, height: 30, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
