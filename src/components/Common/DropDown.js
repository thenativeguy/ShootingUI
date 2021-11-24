import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {LAYOUT} from '../../layout';

const DropDown = ({
  theme,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  zIndex
}) => {
  return (
    <LinearGradient
      colors={[
        LAYOUT.COLORS.DROPDOWN_BG.SECOND_COLOR,
        LAYOUT.COLORS.DROPDOWN_BG.THIRD_COLOR,
      ]}
      style={{borderWidth: 3, borderColor: LAYOUT.COLORS.DROPDOWN_BG.BORDER, borderRadius:35}}>
      {/* <View> */}
      {/* <Text>Game Mode</Text> */}
      <DropDownPicker
        theme={theme}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        placeholderStyle={{fontFamily:LAYOUT.FONTS.SEMI_BOLD}}
        zIndex={zIndex}
        ArrowDownIconComponent={() => (
          <MaterialIcons
            name="arrow-drop-down"
            size={40}
            color={LAYOUT.COLORS.DROPDOWN_ARROW}
          />
        )}
        ArrowUpIconComponent={() => (
          <MaterialIcons
            name="arrow-drop-up"
            size={40}
            color={LAYOUT.COLORS.DROPDOWN_ARROW}
          />
        )}
        dropDownContainerStyle={{
          backgroundColor: LAYOUT.COLORS.DROPDOWN_BG.SECOND_COLOR,
          borderWidth: 4,
          borderColor: LAYOUT.COLORS.DROPDOWN_BG.BORDER,
          borderRadius: 10,
          zIndex:10000000
        }}
        textStyle={{
          fontFamily: LAYOUT.FONTS.SEMI_BOLD,
          color: '#fff',
          fontSize: 18,
        }}
        style={{
          alignSelf: 'center',
          backgroundColor: LAYOUT.COLORS.DROPDOWN_BG,
          borderWidth: 0,
        }}
      />
      {/* </View> */}
    </LinearGradient>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
