import { StyleSheet } from 'react-native';
import { theme } from '@root/shared/config/theme.ts';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 16,
    borderColor: theme.neutralSecondary,
    borderRadius: 6,
    maxHeight: 50,
  },
  formikContainer: {
    position: 'relative',
  },
});
