import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LAYOUT} from '../../layout';
import ImageModal from '../Home/ImageModal';
import ImagePicker from 'react-native-image-crop-picker';

const Label = ({player, team}) => {
  
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <LinearGradient
        colors={[
          LAYOUT.COLORS.TEXT_INPUT_BORDERS.FIRST_COLOR,
          LAYOUT.COLORS.TEXT_INPUT_BORDERS.SECOND_COLOR,
          LAYOUT.COLORS.TEXT_INPUT_BORDERS.THIRD_COLOR,
        ]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{padding: 2, borderRadius:25}}>
        <View style={styles.labelMainView}>
          <View style={styles.avatarView}>
            <View>
                <FontAwesome
                  name="user"
                  size={24}
                  color={'#AFAFAF'}
                  style={styles.avatarIconStyle}
                />
              <TouchableOpacity onPress={toggleModal}>
                <MaterialIcons
                  name="edit"
                  size={14}
                  style={styles.editBtnStyle}
                />
              </TouchableOpacity>
              <ImageModal
                isVisible={isModalVisible}
                onPress={toggleModal}
              />
            </View>
            <Text style={styles.playerNameTextStyle}> {player} </Text>
          </View>
          <Text style={styles.teamTextStyle}>{team}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  labelMainView: {
    backgroundColor: LAYOUT.COLORS.BLACK,
    paddingVertical: LAYOUT.HEIGHT*0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius:25,
    paddingHorizontal: LAYOUT.WIDTH*0.02,
  },
  avatarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarIconStyle: {
    backgroundColor: '#EDEDED',
    borderRadius: 50,
    paddingHorizontal: LAYOUT.WIDTH*0.024,
    paddingVertical: LAYOUT.WIDTH*0.015,
  },
  editBtnStyle: {
    backgroundColor: LAYOUT.COLORS.EDIT_BTN_BG,
    borderRadius: 50,
    padding: 1,
    position: 'absolute',
    right: -8,
    color:LAYOUT.COLORS.EDIT_BTN_COLOR,
    bottom: 0,
  },
  playerNameTextStyle: {
    color: '#539BF0',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 20,
    marginLeft: LAYOUT.WIDTH*0.035,
  },
  teamTextStyle: {
    color: '#fff',
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 20,
  },
});
