import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginRight: -24,
    marginTop: 12,
  },
  category: {
    color: colors.green,
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    textTransform: 'capitalize',
  },
  selected: {
    color: colors.white,
  },
  categoryContainer: {
    marginRight: 8,
    marginVertical: 14,
  },
  selectedContainer: {
    backgroundColor: colors.green,
    borderRadius: 10,
  },
});

export default styles;
