import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LAYOUT } from '../../layout';

const Input = ({placeholder, icon}) => {
  return (
    <LinearGradient
      colors={[
        LAYOUT.COLORS.TEXT_INPUT_BORDERS.FIRST_COLOR,
        LAYOUT.COLORS.TEXT_INPUT_BORDERS.SECOND_COLOR,
        LAYOUT.COLORS.TEXT_INPUT_BORDERS.THIRD_COLOR,
      ]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={{borderRadius:25}}
      >
      <View style={styles.inputView}>
        <Image
          source={icon}
          style={{
            width: LAYOUT.WIDTH * 0.06,
            height: LAYOUT.WIDTH * 0.06,
            resizeMode: 'contain',
          }}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#fff"
          style={styles.inputStyle}
        />
      </View>
    </LinearGradient>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: LAYOUT.COLORS.BLACK,
    paddingLeft: LAYOUT.WIDTH * 0.045,
    marginVertical: LAYOUT.HEIGHT * 0.0025,
    marginHorizontal: LAYOUT.WIDTH * 0.007,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:25
  },
  inputStyle: {
    fontSize: 18,
    color: '#fff',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    paddingLeft: LAYOUT.WIDTH * 0.03,
  },
});
