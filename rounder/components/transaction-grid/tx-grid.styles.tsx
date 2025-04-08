import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'column', // Stack items vertically (mimicking 1fr grid)
    width: '100%',
    borderRadius: 20, // Equivalent to 1rem border radius
    backgroundColor: 'rgb(250, 250, 250)', // Background color
    shadowColor: 'rgba(0, 0, 0, 1)', // Box shadow (React Native uses shadow properties instead of box-shadow)
    shadowOffset: { width: 0, height: 4 }, // Horizontal and vertical offset (iOS)
    shadowRadius: 12, // Shadow blur radius (iOS)
    shadowOpacity: 0.1, // Shadow opacity (iOS)
    elevation: 4, // Android shadow (elevation)
  },
  container: {
    padding: 16, // Equivalent to 1rem padding
  },
});

export default styles;
