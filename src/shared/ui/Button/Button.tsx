import { ComponentProps, memo } from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import { OpacityPressable } from '@root/shared/ui/OpacityPressable';
import { AppText } from '@root/shared/ui/AppText';
import { styles } from './styles';

type TButtonProps = Omit<ComponentProps<typeof OpacityPressable>, 'children'>;

export interface Props extends TButtonProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export const Button = memo((props: Props) => {
  const {
    title,
    textStyle,
    style,
    ...args
  } = props;

  return (
    <OpacityPressable
      {...args}
      layoutStyle={[styles.button, style]}
    >
      <View style={styles.innerContainer}>
        <AppText style={[styles.text, textStyle]}>
          {title}
        </AppText>
      </View>
    </OpacityPressable>
  );
});

Button.displayName = 'Button';
