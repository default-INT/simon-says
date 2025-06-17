import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackTemplate } from '@root/stack/Stack.tsx';

function App () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackTemplate/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
