import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(242,242,242)', // Background color
    backgroundImage: 'linear-gradient(0deg, rgba(242,242,242,1) 60%, rgba(97,201,203,1) 60%)', // Gradient handled by third-party library
    overflow: 'scroll', // Enable scrolling in React Native, use ScrollView or FlatList to manage scrollable content
  },
  loadingOrErrorContainer: {
    flex: 1,
    backgroundColor: 'rgb(97,201,203)', // Background color
    backgroundImage: 'linear-gradient(45deg, rgba(97,201,203,1) 0%, rgba(181,225,226,1) 100%)', // Gradient (handled differently in React Native, can be done with libraries)
  },
});

export default styles;
