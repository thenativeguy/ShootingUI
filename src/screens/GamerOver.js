import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../components/Common/Background';
import Banner from '../components/Common/Banner';
import Button from '../components/Common/Button';
import Footer from '../components/Common/Footer';
import PointsTable from '../components/Common/PointsTable';
import { LAYOUT } from '../layout';
const GamerOver = ({navigation}) => {
  return (
    <Background>
      <View style={styles.mainView}>
        <View
          style={styles.bannerView}>
          <Banner />
        </View>
        <View
          style={styles.pointsTableView}>
          <PointsTable points="Points" title="10" team="Blue Team" />

          <PointsTable points="Points" title="20" team="Red Team" />
        </View>

        <View style={styles.comparisonView}>
          <Text style={styles.textStyle}>11:07 s</Text>
        </View>
        <Button
          finish
          title="Finish"
          source={LAYOUT.START_BTN_IMG}
          onPress={() => navigation.navigate('Scoreboard')}
        />
      </View>
      <View style={styles.footerView}>
        <Footer logo />
      </View>
    </Background>
  );
};

export default GamerOver;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginHorizontal: LAYOUT.WIDTH * 0.025,
    justifyContent: 'center',
  },
  bannerView:{
    height: LAYOUT.HEIGHT * 0.1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pointsTableView:{
    height: LAYOUT.HEIGHT * 0.25,
    justifyContent: 'space-evenly',
  },
  comparisonView: {
    height: LAYOUT.HEIGHT * 0.2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: LAYOUT.WIDTH * 0.15,
  },
  footerView: {
    marginBottom: LAYOUT.WIDTH * 0.03,
    marginHorizontal: LAYOUT.WIDTH * 0.025,
  },
});
