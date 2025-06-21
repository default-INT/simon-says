import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from '@root/shared/ui/Button';
import { OpacityPressable } from '@root/shared/ui/OpacityPressable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '@root/shared/ui/AppText';
import { theme } from '@root/shared/config/theme.ts';
import { SimonSaysBoard } from '@root/widgets/SimonSaysBoard';

const size = Dimensions.get('window').width / 2 - 20;
const tiles = [theme.tiles.green, theme.tiles.red, theme.tiles.yellow, theme.tiles.blue];

export const GameScreen = () => {
  const i = 0;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
      <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'space-between' }}>
        <Text>Game Screen</Text>
        <SimonSaysBoard />
      </View>
    </SafeAreaView>
  );
};
