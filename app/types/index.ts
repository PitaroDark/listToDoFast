import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamListApp = {
  Home: undefined;
  Details: {id?: number};
};

export type HomeScreenProps = NativeStackScreenProps<StackParamListApp, 'Home'>;

export type DetailsScreenProps = NativeStackScreenProps<
  StackParamListApp,
  'Details'
>;

export type Task = {
  id: number;
  title: string;
  description: string;
  expirationDate: string;
};
