import { StyleSheet } from 'react-native';
import { theme } from '@root/shared/config/theme.ts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    padding: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: theme.neutralSecondary,
    textAlign: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
});
