import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './navigation/RootNavigation';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
