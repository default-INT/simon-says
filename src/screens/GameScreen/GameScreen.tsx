import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimonSaysBoard } from '@root/widgets/SimonSaysBoard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadLocalResults } from '@root/entities/results/model';
import { styles } from './styles';

export const GameScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLocalResults());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.root} edges={['bottom']}>
      <View style={styles.container}>
        <SimonSaysBoard />
      </View>
    </SafeAreaView>
  );
};
