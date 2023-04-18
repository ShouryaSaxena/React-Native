/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export const useStatusBar = (style: any, animated = true) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style, animated);
    }, []),
  );
};
