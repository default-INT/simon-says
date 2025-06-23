import { StyleSheet } from 'react-native';
import { theme } from '@root/shared/config/theme.ts';

export const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    marginTop: 6,
    marginLeft: 6,
    color: theme.dangerousRegular,
  },
});
