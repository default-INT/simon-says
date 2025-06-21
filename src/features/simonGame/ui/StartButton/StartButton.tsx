import { memo } from 'react';
import { View } from 'react-native';
import { AppText } from '@root/shared/ui/AppText';
import { OpacityPressable } from '@root/shared/ui/OpacityPressable';
import { styles } from './styles';

interface Props {
  onStart?: () => void;
  isGameRan: boolean
  score: number
}

export const StartButton = memo((props: Props) => {
  const { score, isGameRan, onStart } = props;

  return (
    <OpacityPressable
      disabled={isGameRan}
      disabledWithoutFeedback
      layoutStyle={styles.container}
      pointerEvents={isGameRan ? 'box-none' : 'auto'}
      onPress={onStart}
    >
      <View style={styles.inner}>
        <AppText style={styles.text}>
          {isGameRan ? score : 'START'}
        </AppText>
      </View>
    </OpacityPressable>
  );
});

StartButton.displayName = 'StartButton';
