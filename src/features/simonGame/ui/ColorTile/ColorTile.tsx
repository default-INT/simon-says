import { memo, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { OpacityPressable } from '@root/shared/ui/OpacityPressable';
import { styles } from './styles';

interface Props {
  index: number
  color: string
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  onPress: () => void
}

const borderPositions = [
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
];

export const ColorTile = memo((props: Props) => {
  const { index, color, style, disabled, onPress } = props;

  const tileStyles = useMemo(() => ({
    [borderPositions[index]]: '100%',
    backgroundColor: color,
  }), [index]);

  return (
    <OpacityPressable
      disabledWithoutFeedback
      disabled={disabled}
      layoutStyle={[styles.tile, tileStyles, style]}
      onPress={onPress}
    />
  );
});

ColorTile.displayName = 'ColorTile';
