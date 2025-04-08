import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row', // Align children in a row (mimicking grid-template-columns)
    width: '100%',
    marginHorizontal: 16, // Equivalent to 1rem (horizontal margins)
    color: 'rgb(63, 63, 63)', // Text color
    flexWrap:"nowrap",
    justifyContent:"space-evenly",
  },
  item: {
    fontSize: 18, // Equivalent to large font size
    fontWeight: '300', // Lighter weight
    textAlign: 'right',
    marginVertical:10,

  },
  delta: {
    marginVertical:10,
    fontSize: 18, // Equivalent to large font size
    fontWeight: '400', // Normal weight
    color: 'rgb(0, 207, 35)', // Green color
  },
  left: {
  },
  right: {
  },
});

export default styles;
