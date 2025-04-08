import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16, // Equivalent to 1rem padding
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Background color with slight opacity
  },
  text:{
    color: 'rgb(255, 255, 255)', // White text color
    fontSize: 24, // Equivalent to x-large font size
    fontWeight: 'bold', // Bold font weight
    fontFamily: 'Lucida Sans', // Use the desired system font family
},
image:{
    height:50,
    width:100,
    resizeMode:"stretch",
}});

export default styles;
