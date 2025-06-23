import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { GameScreen } from '@root/screens/GameScreen';
import { ResultsScreen } from '@root/screens/ResultsScreen';
import { RootNavigationParams } from '@root/shared/config/routes.ts';
import { theme } from '@root/shared/config/theme.ts';

const screenOptions: NativeStackNavigationOptions = {
  title: 'Simon Game',
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.primaryRegular,
  },
};

const Stack = createNativeStackNavigator<RootNavigationParams>();

export const RootNavigation = () => (
  <Stack.Navigator
    screenOptions={screenOptions}
  >
    <Stack.Screen name={'game'} component={GameScreen}/>
    <Stack.Screen name={'results'} component={ResultsScreen}/>
  </Stack.Navigator>
);
