import { memo } from 'react';
import { GameResult } from '@root/shared/api/dto';
import { ListRenderItem, View } from 'react-native';
import { AppText } from '@root/shared/ui/AppText';
import { formatDate, options } from '@root/shared/lib/formatDate';
import { styles } from './styles';

interface Props {
  gameResult: GameResult;
}

export const ResultRowItem = memo(({ gameResult }: Props) => (
  <View style={styles.row}>
    <View style={styles.cell}>
      <AppText>{formatDate(gameResult.date, options.shortD.shortT())}</AppText>
    </View>
    <View style={styles.cell}>
      <AppText>{gameResult.name}</AppText>
    </View>
    <View style={styles.cell}>
      <AppText>{gameResult.score}</AppText>
    </View>
  </View>
));

export const resultRowKeyExtractor = (item: GameResult, index: number) => item.date + item.score + item.name;

export const resultRowRenderItem: ListRenderItem<GameResult> = listItem => (
  <ResultRowItem
    gameResult={listItem.item}
  />
);

ResultRowItem.displayName = 'ResultRowItem';
