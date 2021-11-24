import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Text} from 'react-native-svg';
import {LAYOUT} from '../../layout';

const TextOutline = ({title, points, label}) => {
  return (
    <Svg height="100" width="200">
      {title ? (
        <Text
          fill="#fff"
          stroke="#323246"
          strokeWidth="3"
          fontFamily={LAYOUT.FONTS.BOLD}
          fontSize="50"
          fontWeight="bold"
          x="100"
          y="50"
          textAnchor="middle">
          {title}
        </Text>
      ) : (
        <Text
          fill= {LAYOUT.COLORS.POINTS_TABLE}
          stroke="#FFF"
          strokeWidth="3"
          fontFamily={LAYOUT.FONTS.BOLD}
          fontSize="70"
          x="40"
          y="70"
          textAnchor="middle">
          {points}
        </Text>
      )}
    </Svg>
  );
};

export default TextOutline;

const styles = StyleSheet.create({});
