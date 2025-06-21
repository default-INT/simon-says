import { theme } from '@root/shared/config/theme.ts';
import { useCallback, useEffect, useRef, useState } from 'react';
import { runOnJS, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { getRandomInt } from '@root/shared/lib/getRandomInt.ts';

const tiles = [theme.tiles.green, theme.tiles.red, theme.tiles.yellow, theme.tiles.blue];
const PLAY_TIMEOUT = 500;

export const useSimonGame = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const opacities = useRef(tiles.map(() => useSharedValue(1))).current;

  const tileStyles = opacities.map(opacity =>
    useAnimatedStyle(() => ({
      opacity: opacity.value,
    })),
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameRan, setIsGameRan] = useState(false);

  const flashTile = useCallback(async (index: number) => new Promise<void>(resolve => {
    opacities[index].value = withSequence(
      withTiming(0.3, { duration: PLAY_TIMEOUT }),
      withTiming(1, { duration: PLAY_TIMEOUT }, () => {
        runOnJS(resolve)();
      }),
    );
  }), []);

  const runSequence = useCallback(async () => {
    setIsPlaying(true);

    const newSequence = [...sequence, getRandomInt(tiles.length)];
    setSequence(newSequence);

    for (let i = 0; i < newSequence.length; i++) {
      await flashTile(newSequence[i]);
    }
    setIsPlaying(false);
    setIsGameRan(true);
  }, [sequence]);

  const runGame = useCallback(() => {
    setIsGameRan(true);
    runSequence();
  }, [runSequence]);

  const onTapTile = useCallback((index: number) => () => {
    setUserSequence(prev => [...prev, index]);
  }, []);

  useEffect(() => {
    if (!isGameRan) return;
    const isEqual = userSequence.every((val, idx) => val === sequence[idx]);

    if (!isEqual) {
      setUserSequence([]);
      setSequence([]);
      setScore(0);
      setIsGameRan(false);

      return;
    }

    if (userSequence.length < sequence.length) return;

    setUserSequence([]);
    setScore(prev => prev + 1);
    runSequence();
  }, [userSequence]);

  return {
    run: runGame,
    tiles,
    tileStyles,
    isPlaying,
    score,
    isGameRan,
    onTapTile,
  };
};
