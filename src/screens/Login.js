import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Common/Background';
import Button from '../components/Common/Button';
import Footer from '../components/Common/Footer';
import Input from '../components/Common/Input';
import { LAYOUT } from '../layout';

const Login = ({navigation}) => {
  return (
    <Background>
      <View style={styles.mainView}>
        <View style={styles.logoView}>
          <Image source={LAYOUT.LOGO.LOGO} style={styles.imageStyle} />
        </View>
        <View style={styles.inputView}>
          <Input icon={LAYOUT.ICONS.EMAIL} placeholder={'Username'} />
          <Input icon={LAYOUT.ICONS.PASSWORD} placeholder={'Password'} />
        </View>
        <View
          style={{
            height: LAYOUT.HEIGHT * 0.4,
            marginTop: LAYOUT.HEIGHT * 0.03,
          }}>
          <Button
            icon={'navigate-next'}
            login
            title="Login"
            onPress={() => navigation.navigate('Home Stack')}
          />
        </View>
      </View>
      <View style={styles.footerView}>
        <Footer />
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: LAYOUT.PADDING_HORIZONTAL,
    justifyContent: 'center',
  },
  logoView: {
    height: LAYOUT.HEIGHT * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 50,
    width: LAYOUT.WIDTH * 0.5,
  },
  imageStyle: {
    resizeMode: 'contain',
  },
  inputView: {height: LAYOUT.HEIGHT * 0.2, justifyContent: 'space-evenly'},
  inputsView: {
    justifyContent: 'space-evenly',
    borderWidth: 1,
  },
  footerView: {
    marginBottom: LAYOUT.WIDTH * 0.03,
    paddingHorizontal: LAYOUT.PADDING_HORIZONTAL,
  },
});
