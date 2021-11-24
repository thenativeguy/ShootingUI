import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {LAYOUT} from '../../layout';
import TextOutline from './TextOutline';

const Button = ({
  onPress,
  title,
  icon,
  login,
  width,
  start,
  source,
  finish,
}) => {
  return (
    <TouchableOpacity style={{width: width}} onPress={onPress}>
      {login ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            LAYOUT.COLORS.PRIMARY_BUTTON.FIRST_COLOR,
            LAYOUT.COLORS.PRIMARY_BUTTON.FIRST_COLOR,
          ]}
          style={{
            paddingVertical: 10,
            borderWidth: 4,
            borderRadius:35,
            borderColor: LAYOUT.COLORS.PRIMARY_BUTTON.BORDER_COLOR,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.btnText}>{title}</Text>
            {icon && <MaterialIcons name={icon} size={22} color={'black'} />}
          </View>
        </LinearGradient>
      ) : start ? (
        <View>
          <Image
            source={source}
            style={{
              width: LAYOUT.WIDTH * 0.25,
              height: LAYOUT.HEIGHT * 0.2,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: LAYOUT.HEIGHT * 0.05,
              alignSelf: 'center',
            }}>
            <TextOutline title={title} />
          </View>
        </View>
      ) : finish ? (
        <LinearGradient
          colors={[
            LAYOUT.COLORS.FINISH_BTN.FIRST_COLOR,
            LAYOUT.COLORS.FINISH_BTN.SECOND_COLOR,
          ]}
          style={{
            paddingVertical: 10,
            borderWidth: 2,
            borderColor: '#2E467D',
            borderRadius:50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.finishBtnText}>{title}</Text>
            {icon}
          </View>
        </LinearGradient>
      ) : (
        <Text
          style={{
            backgroundColor: '#001E3E',
            color: '#FFF',
            borderWidth: 2,
            borderColor: LAYOUT.COLORS.SECONDARY_BUTTON_BORDER,
            marginVertical: 2,
            paddingVertical: 12,
            textAlign: 'center',
            fontFamily: LAYOUT.FONTS.BOLD,
            fontSize: 20,
            borderRadius:50,
          }}>
          {title}
        </Text>
      )}
      {}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: {
    alignSelf: 'center',
    marginVertical: 2,
    marginHorizontal: 2,
    color: '#323246',
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 20,
  },
  finishBtnText: {
    alignSelf: 'center',
    marginVertical: 2,
    marginHorizontal: 2,
    color: '#fff',
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 20,
  },
});
