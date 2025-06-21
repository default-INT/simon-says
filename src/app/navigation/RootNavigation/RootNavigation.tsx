import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameScreen } from '@root/screens/GameScreen';
import { ResultsScreen } from '@root/screens/ResultsScreen';
import { RootNavigationParams } from '@root/shared/config/routes.ts';

const Stack = createNativeStackNavigator<RootNavigationParams>();

export const RootNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name={'game'} component={GameScreen}/>
    <Stack.Screen name={'results'} component={ResultsScreen}/>
  </Stack.Navigator>
);
