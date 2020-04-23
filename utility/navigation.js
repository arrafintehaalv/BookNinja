import { NavigationActions, StackActions } from 'react-navigation';

export const resetAction = (route) =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: route })],
  });
