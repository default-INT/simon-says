import { memo, useMemo } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { Field } from 'formik';
import { Error } from '../Error';
import { IAppInputFieldProps, AppInputField } from './AppInputField';

import { styles } from './styles';

export interface IAppInputProps extends IAppInputFieldProps {
  formikName?: string;
  errorModifiers?: StyleProp<TextStyle>;
  formikModifiers?: StyleProp<ViewStyle>;
}

export const AppInput = memo((props: IAppInputProps) => {
  const { formikName, errorModifiers, formikModifiers } = props;

  if (!formikName) return <AppInputField {...props} />;

  return (
    <Field name={formikName}>
      {({ field, meta }: any) => {
        const { onChange, onBlur, ...fieldProps } = field;
        const onChangeText = useMemo(() => onChange(formikName), [onChange]);
        const onBlurWrap = useMemo(() => onBlur(formikName), [onBlur]);

        return (
          <View style={[styles.formikContainer, formikModifiers]}>
            <AppInputField
              {...meta}
              {...fieldProps}
              onChangeText={onChangeText}
              onBlur={onBlurWrap}
              {...props}
            />
            {meta.touched && meta.error && (
              <Error errorMessage={meta.error} modifiers={errorModifiers} />
            )}
          </View>
        );
      }}
    </Field>
  );
});

AppInput.displayName = 'AppInput';
