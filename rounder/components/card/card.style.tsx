import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  grid: {
    flex: 1, // Makes the parent view take the full height
    flexDirection: 'column', // Vertical stacking of children (like grid rows)
    justifyContent: 'space-between', // Distributes space between children evenly
    borderRadius: 20, // border radius
    width: '100%', // Full width
    paddingVertical: 16, // Padding for top and bottom (equivalent to padding: 1rem 0 1rem 0)
    textAlign: 'center', // Center text horizontally
    backgroundColor: 'rgb(97,201,203)', // Adjust background color if necessary
  },
  container: {
    textAlign: 'center', // Center text horizontally
    flex: 5, // Flex value for the middle part (5fr equivalent to 5 parts of space)
    justifyContent: 'center', // Vertically centers the content inside
    alignItems: 'center', // Horizontally centers the content
  },
  amount:{
    fontSize: 64, // Adjust to mobile scale
    fontWeight: 'bold',
    textAlign: 'center', // Center text horizontally
    color: 'rgb(255, 255, 255)', // White text color

  },
  body: {
    fontSize: 40, // Adjust to mobile scale
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)', // White text color
    textAlign: 'center', // Center text horizontally

  },
  footer: {
    flex: 1, // Equivalent to 1fr (this part takes 1 fraction of the available space)
    justifyContent: 'center', // Centers footer content
    alignItems: 'center',
    textAlign: 'center', // Center text horizontally
    color: 'rgb(255, 255, 255)', // White text color
    fontSize: 24, // Adjust to mobile scale

  },
});

export default styles;
