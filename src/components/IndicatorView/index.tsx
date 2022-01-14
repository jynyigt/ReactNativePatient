import {ActivityIndicator, View} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {Styles} from './ style';

export function IndicatorView(props: PropsWithChildren<{}>): ReactElement {
  const busy = useSelector(state => state.ui.busy);

  return (
    <>
      {props.children}
      {busy ? (
        <View style={Styles.container} key="indicator">
          <ActivityIndicator size={'large'} color={'orange'} />
        </View>
      ) : null}
    </>
  );
}
