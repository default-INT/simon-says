import { theme } from '@root/shared/config/theme.ts';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import SoundPlayer from 'react-native-sound-player';
import { getRandomInt } from '@root/shared/lib/getRandomInt.ts';
import { useNavigation } from '@react-navigation/native';
import { NavigatorProps } from '@root/shared/config/routes.ts';

const PLAY_TIMEOUT = 500;
const tiles = [theme.tiles.green, theme.tiles.red, theme.tiles.yellow, theme.tiles.blue];
const soundSampleNames = ['a_major', 'd_major', 'e_major', 'f_major'];
const delay = () => new Promise<void>(resolve => setTimeout(resolve, PLAY_TIMEOUT));

export const useSimonGame = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const { navigate } = useNavigation<NavigatorProps>();
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

    await delay();

    for (let i = 0; i < newSequence.length; i++) {
      const itemIdx = newSequence[i];

      SoundPlayer.stop();
      SoundPlayer.playSoundFile(soundSampleNames[itemIdx], 'wav');

      await flashTile(itemIdx);
    }
    setIsPlaying(false);
    setIsGameRan(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence]);

  const runGame = useCallback(() => {
    setIsGameRan(true);
    runSequence();
  }, [runSequence]);

  const onTapTile = useCallback((index: number) => () => {
    SoundPlayer.stop();
    SoundPlayer.playSoundFile(soundSampleNames[index], 'wav');
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

      navigate('results');

      return;
    }

    if (userSequence.length < sequence.length) return;

    setUserSequence([]);
    setScore(prev => prev + 1);
    runSequence();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
