import { StyleSheet } from 'react-native';
import { theme } from '@root/shared/config/theme.ts';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -100 }],
    zIndex: 4,
    borderWidth: 10,
    borderColor: theme.mainExtra,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
