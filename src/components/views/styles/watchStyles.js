import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: { // Red Area
    flex: 5, // takes 5/8ths of the available space
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: { // Green Area
    flex: 3, // takes 3/8ths of the availabel space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 20,
    fontWeight: '700'
  }
});
