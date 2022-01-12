import * as uiActions from './action';
import {useMemo} from 'react';
import {createActionsHook} from '../../utils/ action';

export const useUIActions = createActionsHook(uiActions);

export function useSwitchNavigation() {
  const changeSwitchNavigationRoute = useUIActions(
    actions => actions.changeSwitchNavigationRouteAction,
  );

  return useMemo(
    () => ({
      navigate: changeSwitchNavigationRoute,
    }),
    [changeSwitchNavigationRoute],
  );
}
