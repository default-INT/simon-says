import { ComponentProps, memo } from 'react';
import { TextInput } from 'react-native';
import { theme } from '@root/shared/config/theme';
import { styles } from './styles';

export interface IAppInputFieldProps extends ComponentProps<typeof TextInput> {
}

export const AppInputField = memo((props: IAppInputFieldProps) => {
  const { style, ...inputProps } = props;

  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={theme.neutralSecondary}
      {...inputProps}
    />
  );
});

AppInputField.displayName = 'AppInput';
