import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Equivalent to grid rows
    justifyContent: 'center', // Spacing between elements
    paddingVertical: 1,
    height: 100,
  },
  blobContainer: {
    flexDirection: 'row', // Align items horizontally (like grid items)
    justifyContent: "space-between",
    alignItems: "center", // Align blobs to the top
    height: '100%',
    gap: '1%', // React Native doesn't support gap, we can manage spacing using margin
  },
  blob: {
    width: 12,
    height: 12,
    borderRadius: 50, // Make it circular
    backgroundColor: '#f5f5f5', // Blob color
    margin: '1%', // Spacing between blobs
  },
  blob1: {
    animationDelay: '0s',
  },
  blob2: {
    animationDelay: '0.15s',
  },
  blob3: {
    animationDelay: '0.3s',
  },
  blob4: {
    animationDelay: '0.45s',
  },
  blob5: {
    animationDelay: '0.6s',
  },
  image:{
    
  }
});

export default styles;
