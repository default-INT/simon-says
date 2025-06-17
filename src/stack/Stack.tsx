import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const StackTemplate = () => (
  <Stack.Navigator>
    <Stack.Screen name={'first'} component={FirstScreen}/>
    <Stack.Screen name={'second'} component={SecondScreen}/>
  </Stack.Navigator>
  );

const FirstScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={ {flex: 1}}>
      <Text>First</Text>
      <Button title={'to second'} onPress={() => navigation.navigate('second')} />
    </View>
  );
};


const SecondScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Text>Second</Text>
      <Button title={'to back'} onPress={navigation.goBack} />
    </View>
  );
};
