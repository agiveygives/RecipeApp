import { StyleSheet } from "react-native";
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 50,
    marginVertical: 60,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 14,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'center',
  },
  largeTitle: {
    color: colors.white,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 64,
  }
});

export default styles;
