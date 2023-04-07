/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useState, useCallback} from 'react';
import {StyleSheet, TextInput} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import useTogglePasswordVisibility from '../hooks/useTogglePasswordVisibility';
// import {Icon} from 'react-native-elements';

export default function Password({setValue}: {setValue: Function}) {
  // const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  // useTogglePasswordVisibility();

  return (
    <TextInput
      onChangeText={newPass => {
        setValue(newPass);
      }}
      textContentType="password"
      placeholder="Password"
      placeholderTextColor={'white'}
      defaultValue= ""
      style={styles.primaryInput}
      secureTextEntry
      // right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)} />}
    />
  );
}
const styles = StyleSheet.create({
  primaryInput: {
    marginTop: '5%',
    backgroundColor: 'black',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '70%',
    margin: 'auto',
    borderStyle: 'dotted',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
  },
});
// const styles = StyleSheet.create({
//     inputContainer: {
//       backgroundColor: 'white',
//       width: '100%',
//       borderRadius: 8,
//       flexDirection: 'row',
//       alignItems: 'center',
//       borderWidth: 4,
//       borderColor: '#d7d7d7',
//     },
//     inputField: {
//       padding: 14,
//       fontSize: 22,
//       width: '90%',
//     },
//   });
