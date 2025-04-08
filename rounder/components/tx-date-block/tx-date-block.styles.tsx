import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'column', // Stack items vertically (mimicking 1fr grid)
    width: '100%',
    borderRadius: 20, // Equivalent to 1rem border radius
    backgroundColor: 'rgb(255, 255, 255)', // Background color
    shadowColor: 'rgba(0, 0, 0, 1)', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Horizontal and vertical offset
    shadowRadius: 12, // Shadow blur radius
    shadowOpacity: 0.1, // Shadow opacity
  },
  date: {
    fontSize: 18, // Equivalent to large font size
    fontWeight: '400', // Normal weight
    textAlign: 'center',
    paddingBottom: 4, // Padding bottom (adjust to 0.25rem)
  },
  container: {
    padding: 16, // Equivalent to 1rem padding
  },
});

export default styles;
