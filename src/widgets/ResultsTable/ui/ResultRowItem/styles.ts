import { StyleSheet } from 'react-native';
import { theme } from '@root/shared/config/theme.ts';

export const styles = StyleSheet.create({
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
});
