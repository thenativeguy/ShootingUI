import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Background from '../components/Common/Background';
import Banner from '../components/Common/Banner';
import Button from '../components/Common/Button';
import DropDown from '../components/Common/DropDown';
import Footer from '../components/Common/Footer';
import Label from '../components/Common/Label';
import {LAYOUT} from '../layout';

const Home = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [gameMode, setGameMode] = useState([
    {
      label: (
        <View style={styles.labelMianView}>
          <Text style={styles.defaultTextStyle}>Game Mode</Text>
          <View style={styles.gameModeView}>
            <Image
              source={LAYOUT.ICONS.ICE_HOCKEY}
              style={{width: 30, height: 30}}
            />
            <Text
              style={[
                styles.defaultTextStyle,
                {
                  marginLeft: LAYOUT.WIDTH * 0.05,
                },
              ]}>
              Hockey
            </Text>
          </View>
        </View>
      ),
      value: '1',
    },
  ]);
  const [openScoreUnit, setOpenScoreUnit] = useState(false);
  const [scoreValue, setScoreValue] = useState(null);
  const [scorePoints, setScorePoints] = useState([
    {
      label: (
        <View style={styles.labelMianView}>
          <View style={{flex: 0.8}}>
            <Text style={styles.defaultTextStyle}>Score Unit</Text>
          </View>
          <View style={{flex: 0.2, marginLeft: 50}}>
            <Text style={[styles.defaultTextStyle, {alignSelf: 'flex-end'}]}>
              Points
            </Text>
          </View>
        </View>
      ),
      value: '1',
    },
  ]);
  return (
    <Background>
      <View style={styles.mainView}>
        <View style={styles.bannerView}>
          <Banner />
        </View>
        <View
          style={styles.dropDownView}>
          <DropDown
            theme={'DARK'}
            open={open}
            value={value}
            items={gameMode}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setGameMode}
            zIndex={10000000000}
            placeholder="Game Mode"
          />
          <DropDown
            theme={'DARK'}
            open={openScoreUnit}
            setOpen={setOpenScoreUnit}
            value={scoreValue}
            setValue={setScoreValue}
            items={scorePoints}
            setItems={setScorePoints}
            placeholder="Score Unit"
          />
        </View>
        <View style={styles.comparisonView}>
          <Text style={styles.textStyle}>1 vs 1</Text>
        </View>
        <View
          style={styles.labelView}>
          <Label player="Player 1" team="Blue Team" />
          <Label player="Player 2" team="Red Team" />
        </View>
        <View style={{height: LAYOUT.HEIGHT * 0.2, justifyContent: 'flex-end'}}>
          <Button
            start
            title="START"
            source={LAYOUT.START_BTN_IMG}
            onPress={() => navigation.navigate('Gamer over')}
          />
        </View>
      </View>
      <View style={styles.footerView}>
        <Footer logo />
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {flex: 1, justifyContent: 'center'},
  bannerView: {
    height: LAYOUT.HEIGHT * 0.1,
    alignItems: 'center',
  },
  dropDownView:{
    height: LAYOUT.HEIGHT * 0.2,
    justifyContent: 'space-evenly',
    marginHorizontal: LAYOUT.WIDTH * 0.025,
  },
  labelMianView: {
    flex: 1,
    flexDirection: 'row',
  },
  labelView: {
    height: LAYOUT.HEIGHT * 0.2,
    marginHorizontal: LAYOUT.WIDTH * 0.025,
    justifyContent: 'space-evenly',
  },
  defaultTextStyle: {
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    color: '#fff',
    fontSize: 18,
  },
  gameModeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: LAYOUT.WIDTH * 0.15,
  },
  comparisonView: {
    height: LAYOUT.HEIGHT * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 30,
  },
  footerView: {
    marginBottom: LAYOUT.WIDTH * 0.03,
    marginHorizontal: LAYOUT.WIDTH * 0.025,
  },
});
