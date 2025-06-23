import { Text, View } from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '@root/entities/results/model';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '@root/shared/ui/AppText';
import { formatDate, options } from '@root/shared/lib/formatDate';
import { styles } from './styles';

export const ResultsScreen = () => {
  const state = useSelector((state: RootState) => state.results);

  console.log('state', state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.root} edges={['bottom']}>
      <Text>Results Screen</Text>
      <View>
        <View style={styles.row}>
          <View style={[styles.cell]}>
            <AppText style={styles.headerText}>
              Date
            </AppText>
          </View>
          <View style={styles.cell}>
            <AppText style={styles.headerText}>
              Name
            </AppText>
          </View>
          <View style={styles.cell}>
            <AppText style={styles.headerText}>
              Score
            </AppText>
          </View>
        </View>
        {state.data.map(item => (
          <View key={item.date + item.name + item.score} style={styles.row}>
            <View style={styles.cell}>
              <AppText>{formatDate(item.date, options.fullD.shortT())}</AppText>
            </View>
            <View style={styles.cell}>
              <AppText>{item.name}</AppText>
            </View>
            <View style={styles.cell}>
              <AppText>{item.score}</AppText>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
