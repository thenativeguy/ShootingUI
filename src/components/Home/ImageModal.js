import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Input from '../Common/Input';
import Button from '../Common/Button';
import {LAYOUT} from '../../layout';
const ImageModal = ({onPress, isVisible,}) => {
   const [image, setImage] = useState();
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path)
    });
  }
  return (
    <Modal isVisible={isVisible}>
      <LinearGradient
        colors={[
          LAYOUT.COLORS.MODAL.BORDERS.FIRST_COLOR,
          LAYOUT.COLORS.MODAL.BORDERS.SECOND_COLOR,
          LAYOUT.COLORS.MODAL.BORDERS.THIRD_COLOR,
        ]}
        style={styles.linearGradientStyle}>
        <View style={styles.modalMainView}>
          <View style={styles.headerView}>
            <Text style={styles.headerTextStyle}>Edit Details</Text>
            <TouchableOpacity onPress={onPress}>
              <Entypo
                name="cross"
                size={20}
                color="#FFF"
                style={styles.closeBtnStyle}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', marginHorizontal: 10}}>
            <View style={styles.avatarView}>
              {image ? (
                <Image
                  source={{uri: image}}
                  style={{width: 80, height: 80, borderRadius: 100}}
                />
              ) : (
                <FontAwesome
                  name="user"
                  size={80}
                  color={'#AFAFAF'}
                  style={styles.avatarIconStyle}
                />
              )}
              <TouchableOpacity onPress={openGallery}>
                <MaterialIcons
                  name="edit"
                  size={24}
                  style={styles.editBtnStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 20}}>
              <Input placeholder={"Blue Team"} />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
                title="Cancel"
                onPress={onPress}
                width={LAYOUT.WIDTH * 0.4}
              />
              <Button
                login
                title="Save"
                width={LAYOUT.WIDTH * 0.4}
                onPress={onPress}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
      {/* <Button title="Hide modal" onPress={onPress} /> */}
    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  linearGradientStyle: {
    flex: 0.6,
    marginBottom: 10,
    padding: 4,
    borderRadius:25,
  },
  modalMainView: {
    flex: 1,
    backgroundColor: LAYOUT.COLORS.BLACK,
    borderRadius:25
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    color: '#fff',
    fontFamily: LAYOUT.FONTS.BOLD,
    fontSize: 22,
    marginTop: 10,
    flex: 0.8,
    textAlign: 'center',
  },
  closeBtnStyle: {
    backgroundColor: LAYOUT.COLORS.SECONDARY_BUTTON,
    borderRadius: 50,
  },
  avatarView: {
    flexDirection: 'row',
    // flex: 1,
    paddingHorizontal: 5,
    alignItems: 'center',
    // marginVertical: LAYOUT.WIDTH*0.5,
    justifyContent: 'center',
  },
  avatarIconStyle: {
    backgroundColor: '#EDEDED',
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  editBtnStyle: {
    backgroundColor: LAYOUT.COLORS.EDIT_BTN_BG,
    color:LAYOUT.COLORS.EDIT_BTN_COLOR,
    borderRadius: 50,
    padding: 2,
    position: 'absolute',
    right: -8,
    top: 9,
  },
});
