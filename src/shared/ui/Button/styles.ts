import { StyleSheet } from 'react-native';
import { theme } from '@root/shared/config/theme.ts';

export const styles = StyleSheet.create({
  button: {
    position: 'relative',
    elevation: 4,
    backgroundColor: theme.primaryRegular,
    padding: 20,
    borderRadius: 8,
  },
  innerContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  text: {
    color: theme.mainBasic,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
