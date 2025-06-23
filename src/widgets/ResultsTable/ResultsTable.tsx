import { memo, useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { GameResult } from '@root/shared/api/dto';
import { OpacityPressable } from '@root/shared/ui/OpacityPressable';
import { AppText } from '@root/shared/ui/AppText';
import { useSelector } from 'react-redux';
import { SortOrder } from '@root/shared/config/list.ts';
import { toCapitalize } from '@root/shared/lib/toCapitalize.ts';
import { selectSortedResults } from '@root/widgets/ResultsTable/model';
import { API_KEY, API_URL } from '@env';
import { resultRowKeyExtractor, resultRowRenderItem } from './ui/ResultRowItem';
import { styles } from './styles';

type FieldLabel = keyof GameResult;

const sortOrderSymbol = {
  [SortOrder.Asc]: '↑',
  [SortOrder.Desc]: '↓',
};

const headerLabels: FieldLabel[] = ['date', 'name', 'score'];

const getLabelName = (label: FieldLabel, selected: FieldLabel, order: SortOrder) => {
  const formattedLabel = toCapitalize(label);
  const isSelected = label === selected;

  return isSelected ? `${formattedLabel} ${sortOrderSymbol[order]}` : formattedLabel ;
};

export const ResultsTable = memo(() => {
  const [sortKey, setSortKey] = useState<keyof GameResult>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Desc);
  const results = useSelector((state: RootState) => selectSortedResults(state, sortKey, sortOrder));

  const toggleSortByKey = useCallback((key: keyof GameResult) => () => {
    if (sortKey === key) {
      return setSortOrder(prev => prev === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc);
    }

    setSortKey(key);
    setSortOrder(SortOrder.Asc);
  }, [sortKey]);

  return (
    <View>
      <View style={styles.row}>
        {headerLabels.map(label => (
          <OpacityPressable
            key={label}
            layoutStyle={styles.cell}
            onPress={toggleSortByKey(label)}
          >
            <AppText style={styles.headerText}>{getLabelName(label, sortKey, sortOrder)}</AppText>
          </OpacityPressable>
        ))}
      </View>
      <FlatList<GameResult>
        showsVerticalScrollIndicator={false}
        style={styles.content}
        keyExtractor={resultRowKeyExtractor}
        data={results}
        renderItem={resultRowRenderItem}
      />
    </View>
  );
});

ResultsTable.displayName = 'ResultsTable';
