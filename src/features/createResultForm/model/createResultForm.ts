import * as Yup from 'yup';

export interface CreateResultFormValues {
  name: string;
}

export const createResultInitialData: CreateResultFormValues = {
  name: '',
};

export const createResultValidationSchema = Yup.object<CreateResultFormValues>().shape({
  name: Yup.string().required()
    .min(1),
});
