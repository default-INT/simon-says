import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootNavigation } from './navigation/RootNavigation';
import store from './config/store';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);

export default App;
