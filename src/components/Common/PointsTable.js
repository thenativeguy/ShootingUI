import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextOutline from './TextOutline';
import LinearGradient from 'react-native-linear-gradient';
import { LAYOUT } from '../../layout';

const PointsTable = ({points, team, title}) => {
  return (
    <View style={styles.labelMainView}>
      <Text style={styles.playerNameTextStyle}>{team}</Text>
      <View style={styles.avatarView}>
        <View style={styles.pointsTextStyle}>
         <Text style={{fontFamily:LAYOUT.FONTS.BOLD,fontSize:50, color:'#fff'}}>{title}</Text>
        </View>
        <Text style={styles.teamTextStyle}>{points}</Text>
      </View>
    </View>
  );
};

export default PointsTable;

const styles = StyleSheet.create({
  labelMainView: {
    backgroundColor: LAYOUT.COLORS.POINTS_TABLE_BG,
    paddingVertical: LAYOUT.WIDTH * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: LAYOUT.WIDTH * 0.025,
    borderWidth: 2,
    borderColor: LAYOUT.COLORS.POINTS_TABLE_BORDER,
    borderRadius:25,
    // shadowColor: LAYOUT.COLORS.BORDER_SHADOW,
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsTextStyle: {
    position: 'absolute',
    right: LAYOUT.WIDTH * 0.2,
    borderWidth: 3,
    borderColor: LAYOUT.COLORS.POINTS_SCORE_BORDER,
    backgroundColor: LAYOUT.COLORS.POINTS_SCORE,
    borderRadius:50,
    paddingHorizontal:10,
    paddingVertical:5
  },
  pointsTextBackground: {
    width: LAYOUT.WIDTH * 0.2,
    height: LAYOUT.HEIGHT * 0.08,
    justifyContent: 'center',
  },
  playerNameTextStyle: {
    color: LAYOUT.COLORS.TEAM_NAME_COLOR,
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 24,
  },
  teamTextStyle: {
    color: '#fff',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 20,
  },
});
