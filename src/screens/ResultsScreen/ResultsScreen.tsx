import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ResultsTable } from '@root/widgets/ResultsTable';
import { CreateResultModal } from '@root/widgets/CreateResultModal';
import { fetchDataRequest } from '@root/entities/results/model';
import { styles } from './styles';

export const ResultsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.root} edges={['bottom']}>
      <CreateResultModal/>
      <ResultsTable />
    </SafeAreaView>
  );
};
