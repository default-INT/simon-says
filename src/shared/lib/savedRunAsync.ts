import { Alert } from 'react-native';

export const savedRunAsync = async <T = void>(
  func: () => PromiseLike<T> | T,
): Promise<T | undefined> => {
  try {
    return await func();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    const e = err as Error;
    Alert.alert('Error', e.message);
  }
};
