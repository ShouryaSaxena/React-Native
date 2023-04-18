/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';

import {useStatusBar} from '../hooks/useStatusBar';

export default function TabOne() {
  useStatusBar('dark-content');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
