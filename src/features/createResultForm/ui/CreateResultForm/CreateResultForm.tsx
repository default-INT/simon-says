import { memo, useCallback, useState } from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { AppInput } from '@root/shared/ui/AppInput';
import { Button } from '@root/shared/ui/Button';
import {
  createResultValidationSchema,
  CreateResultFormValues,
  createResultInitialData,
} from '../../model';
import { styles } from './styles';

interface Props {
  onSubmit?: (values: CreateResultFormValues) => Promise<void>
}

export const CreateResultForm = memo((props: Props) => {
  const { onSubmit = () => {} } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = useCallback(async (values: CreateResultFormValues) => {
    setIsLoading(true);
    await onSubmit?.(values);
    setIsLoading(false);
  }, [onSubmit]);

  return (
    <Formik
      initialValues={createResultInitialData}
      onSubmit={handleSubmitForm}
      validationSchema={createResultValidationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <AppInput
            formikName={'name'}
            placeholder={'Enter your name'}
          />
          <Button
            disabled={isLoading}
            title={'Done'}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
});

CreateResultForm.displayName = 'CreateResultForm';
