import { SafeAreaView } from 'react-native-safe-area-context';
import { ResultsTable } from '@root/widgets/ResultsTable';
import { CreateResultModal } from '@root/widgets/CreateResultModal';
import { styles } from './styles';

export const ResultsScreen = () => (
  <SafeAreaView style={styles.root} edges={['bottom']}>
    <CreateResultModal/>
    <ResultsTable />
  </SafeAreaView>
);
