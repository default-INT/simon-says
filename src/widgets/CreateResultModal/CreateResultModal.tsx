import { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Modal, View } from 'react-native';
import { CreateResultForm } from '@root/features/createResultForm/ui/CreateResultForm';
import { AppText } from '@root/shared/ui/AppText';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootNavigationParams } from '@root/shared/config/routes.ts';
import { api } from '@root/shared/api';
import { CreateResultFormValues } from '@root/features/createResultForm/model';
import { fetchDataRequest } from '@root/entities/results/model';
import { styles } from './styles';

export const CreateResultModal = memo(() => {
  const { params } = useRoute<RouteProp<RootNavigationParams, 'results'>>();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const { score, date } = params;

  const handleSubmit = useCallback(async (values: CreateResultFormValues) => {
    const { name } = values;
    try {
      // NOTE: in task not describe how need to be implement persist storage or need to implement optimistic
      // update, so in this implementation just syncing list between API data and realm
      const { success } = await api.results.post({ score, date: date.toISOString(), name });
      if (!success) throw Error('Error creating result');
      dispatch(fetchDataRequest());
    } catch (e) {
      Alert.alert((e as any)?.message, `Error creating result: ${e}`);
    } finally {
      setIsVisible(false);
    }
  }, [score, date]);

  return (
    <Modal
      animationType='fade'
      transparent
      visible={isVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <AppText style={styles.title}>
            {`Your score: ${score}`}
          </AppText>
          <CreateResultForm onSubmit={handleSubmit}/>
        </View>
      </View>
    </Modal>
  );
});

CreateResultModal.displayName = 'CreateResultModal';
