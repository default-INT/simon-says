import { Text } from 'react-native';
import { ComponentProps } from 'react';
import { styles } from './styles';

export const AppText = ({ children, style,...props }: ComponentProps<typeof Text>) => (
  <Text
    style={[styles.text, style]}
    {...props}
  >
    {children}
  </Text>
);
