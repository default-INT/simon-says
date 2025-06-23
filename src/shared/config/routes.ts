import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface RootNavigationParams extends ParamListBase {
  game: never
  results: { score: number, date: Date }
}

export type NavigatorProps = NativeStackNavigationProp<RootNavigationParams>;
