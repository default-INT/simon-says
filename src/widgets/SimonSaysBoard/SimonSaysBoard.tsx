import { memo } from 'react';
import { View } from 'react-native';
import { ColorTile } from '@root/features/simonGame/ui/ColorTile';
import { StartButton } from '@root/features/simonGame/ui/StartButton';
import { useSimonGame } from '@root/features/simonGame/model/useSimonGame';
import { styles } from './styles';

export const SimonSaysBoard = memo(() => {
  const { tileStyles, isPlaying, tiles, run, isGameRan, onTapTile, score } = useSimonGame();

  return (
    <View style={styles.root}>
      <StartButton
        score={score}
        isGameRan={isGameRan}
        onStart={run}
      />
      <View style={styles.container}>
        {tiles.map((color, idx) => (
          <ColorTile
            key={color}
            index={idx}
            disabled={isPlaying}
            style={tileStyles[idx]}
            color={color}
            onPress={onTapTile(idx)}
          />
        ))}
      </View>
    </View>
  );
});
