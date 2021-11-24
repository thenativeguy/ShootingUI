import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const PADDING_HORIZONTAL = WIDTH * 0.04;

const FONTS = {
  REGULAR: 'Rajdhani-Regular',
  SEMI_BOLD: 'Rajdhani-SemiBold',
  BOLD: 'Rajdhani-Bold',
};

const COLORS = {
  TEXT_INPUT_BORDERS: {
    FIRST_COLOR: '#727AAD',
    SECOND_COLOR: '#FFFFFF',
    THIRD_COLOR: '#727AAD',
  },
  BLACK: '#000',
  PRIMARY_BUTTON: {
    FIRST_COLOR: '#F8D01F',
    SECOND_COLOR: '#FF9900',
    BORDER_COLOR: '#323246',
  },
  SECONDARY_BUTTON: '#072F64',
  SECONDARY_BUTTON_BORDER: '#679FEB',
  DROPDOWN_BG: {
    // FIRST_COLOR: '#7B3AA3',
    SECOND_COLOR: '#3483CB',
    THIRD_COLOR: '#132E8D',
    BORDER: '#73B0F9',
  },
  DROPDOWN_ARROW: '#FFE500',
  EDIT_BTN_BG: '#FFA200',
  EDIT_BTN_COLOR: '#1D1B4B',
  MODAL: {
    BORDERS: {
      FIRST_COLOR: '#0073FF',
      SECOND_COLOR: '#5A6DD2',
      THIRD_COLOR: '#2400FF',
    },
  },
  POINTS_TABLE_BG: '#1B429B',
  POINTS_TABLE_BORDER: '#0074FF',
  POINTS_SCORE: '#090F31',
  POINTS_SCORE_BORDER: '#DE970F',
  FINISH_BTN: {
    BORDER: '#2E467D',
    FIRST_COLOR: '#001E3E',
    SECOND_COLOR: '#21133F',
  },
  TEAM_NAME_COLOR: '#57FFCC',
};

const LOGO = {
  LOGO: require('../assets/images/logo.png'),
};
const BACKGROUND = require('../assets/images/background.png');
const ICONS = {
  EMAIL: require('../assets/images/icons/email.png'),
  PASSWORD: require('../assets/images/icons/password.png'),
  ICE_HOCKEY: require('../assets/images/icons/focus.png'),
  USER: require('../assets/images/icons/user.png'),
};
const FOOTER = {
  GALLERY: require('../assets/images/icons/gallery.png'),
  VOLUME: require('../assets/images/icons/volume.png'),
};
const BANNER = {
  BANNER: require('../assets/images/banner.png'),
};
const START_BTN_IMG = require('../assets/images/playButton.png');
const TROPHY = require('../assets/images/trophy.png');
export const LAYOUT = {
  WIDTH,
  HEIGHT,
  FONTS,
  COLORS,
  LOGO,
  BACKGROUND,
  ICONS,
  FOOTER,
  BANNER,
  START_BTN_IMG,
  TROPHY,
  PADDING_HORIZONTAL,
};
