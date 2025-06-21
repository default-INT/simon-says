import { Dimensions, StyleSheet } from 'react-native';

const size = Dimensions.get('window').width / 2 - 20;

export const styles = StyleSheet.create({
  tile: {
    width: size,
    height: size,
  },
});
