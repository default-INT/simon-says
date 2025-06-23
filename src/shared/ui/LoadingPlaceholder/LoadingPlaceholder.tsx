import { ActivityIndicator, View } from 'react-native';
import { theme } from '@root/shared/config/theme.ts';
import { styles } from './styles';

export const LoadingPlaceholder = () => (
  <View style={styles.container}>
    <ActivityIndicator size={'large'} color={theme.primaryRegular} />
  </View>
);
