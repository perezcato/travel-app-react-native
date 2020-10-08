import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY_COLOR,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
      paddingTop: 40
  },
  inputContainer: {
    flex: 0.7,
  },
  inputStyle: {
    backgroundColor: colors.SECONDARY_BLUE,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  inputBoxStyles: {
    fontFamily: fonts.MEDIUM,
  },
});

export default homeStyles;
