import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    width: width * 0.7,
    marginBottom: 32,
    marginTop: 46,
    marginRight: 32,
    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    // android
    elevation: 9,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: '500',
    flex: 1,
  },
  recipeImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginTop: -40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'space-between',
    marginTop: 8,
  },
  footerText: {
    color: colors.lightGrey2,
    fontSize: 11,
  },
  authorImage: {
    width: 25,
    height: 25,
    marginRight: 8,
    borderRadius: 25,
    backgroundColor: colors.lightGrey,
  },
  timerIcon: {
    height: 17,
    width: 17,
    marginRight: 8,
  }
});

export default styles;
