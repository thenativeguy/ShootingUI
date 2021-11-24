import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Common/Background';
import Banner from '../components/Common/Banner';
import Button from '../components/Common/Button';
import Footer from '../components/Common/Footer';
import PointsTable from '../components/Common/PointsTable';
import {LAYOUT} from '../layout';

const ScoreBoard = ({navigation}) => {
  return (
    <Background>
      <View style={styles.mainView}>
        <View style={styles.bannerView}>
          <Banner />
        </View>
        <View style={styles.pointsTableView}>
          <PointsTable points="Points" title="10" team="Blue Team" />

          <PointsTable points="Points" title="20" team="Red Team" />
        </View>
        <View style={styles.comparisonView}>
          <Image source={LAYOUT.TROPHY} style={styles.trophyImg} />
          <Text style={styles.textStyle}>WINNER</Text>
          <Text style={styles.teamTextStyle}>Red Team</Text>
        </View>
        <View style={styles.btnMainView}>
          <Button
            login
            title="START AGAIN"
            source={LAYOUT.START_BTN_IMG}
            onPress={() => navigation.navigate('Home')}
          />
          <View style={styles.btnSubView}>
            <Button finish title="Compare" width={LAYOUT.WIDTH * 0.45} />
            <Button finish title="Save" width={LAYOUT.WIDTH * 0.45} />
          </View>
        </View>
      </View>
      <View style={styles.footerView}>
        <Footer logo />
      </View>
    </Background>
  );
};

export default ScoreBoard;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginHorizontal: LAYOUT.WIDTH * 0.025,
    justifyContent: 'center',
  },
  bannerView: {
    alignItems: 'center',
    height: LAYOUT.HEIGHT * 0.1,
  },
  pointsTableView: {
    height: LAYOUT.HEIGHT * 0.25,
    justifyContent: 'space-evenly',
  },
  trophyImg: {
    width: LAYOUT.WIDTH * 0.15,
    height: LAYOUT.HEIGHT * 0.07,
  },
  btnMainView: {
    height: LAYOUT.HEIGHT * 0.2,
    justifyContent: 'space-evenly',
  },
  btnSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comparisonView: {
    height: LAYOUT.HEIGHT * 0.2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 50,
  },
  teamTextStyle: {
    color: '#fff',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 26,
  },
  footerView: {
    marginBottom: LAYOUT.WIDTH * 0.03,
    marginHorizontal: LAYOUT.WIDTH * 0.025,
  },
});
