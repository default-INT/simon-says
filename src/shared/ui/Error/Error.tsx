import { memo } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { AppText } from '@root/shared/ui/AppText';
import { styles } from './styles';

interface IProps {
  errorMessage?: string;
  modifiers?: StyleProp<TextStyle>
}

export const Error = memo(({ errorMessage, modifiers }: IProps) => (
  <AppText style={[styles.error, modifiers]}>{errorMessage}</AppText>
));

Error.displayName = 'Error';
