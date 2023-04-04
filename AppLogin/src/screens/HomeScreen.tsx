/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';

export default function HomeScreen({navigation}) {
  const [uEmail, setEmail] = useState('');
  const [uPassword, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Dental Care</Text>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <TextInput
        onChangeText={newEmail => setEmail(newEmail)}
        textContentType="emailAddress"
        placeholder="E-mail Address"
        placeholderTextColor={'white'}
        defaultValue={uEmail}
        style={styles.primaryInput}
      />
      <TextInput
        onChangeText={newPass => setPassword(newPass)}
        textContentType="password"
        placeholder="Password"
        placeholderTextColor={'white'}
        defaultValue={uPassword}
        style={styles.primaryInput}
      />
      <View style={styles.options}>
        <TouchableOpacity
          onPress={async () => {
            // console.log(uEmail, uPassword);
            const req = {
              email: uEmail.toLocaleLowerCase(),
              password: uPassword,
            };
            await Axios.post('https://reqres.in/api/login', req)
              .then(async res => {
                //setUsers(res.data.results);
                console.log(req);
                Alert.alert(`Login Successful for ${req.email}`);
                UserLogin;
                navigation.navigate('Login');
              })
              .catch(error => {
                console.log(error);
                Alert.alert('Authentication Failed');
              });
          }}
          style={styles.login}>
          <View>
            <Text style={{color: 'white', alignSelf: 'center'}}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            const req = {
              email: uEmail.toLowerCase(),
              password: uPassword,
            };
            await Axios.post('https://reqres.in/api/register', req)
              .then(async res => {
                //setUsers(res.data.results);
                console.log(req);
                Alert.alert('Registration Successful');
                UserRegister;
                navigation.navigate('Register');
              })
              .catch(error => {
                Alert.alert('Authentication Failed');
              });
          }}
          style={styles.register}>
          <View>
            <Text style={{color: 'white', alignSelf: 'center'}}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: 125,
    height: 125,
    margin: 'auto',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  dummyText: {
    alignSelf: 'center',
    width: '70%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
    lineHeight: 60,
  },
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
  options: {
    marginTop: '10%',
    marginBottom: '10%',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20,
  },
  login: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '28%',
  },
  register: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '28%',
  },
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  content: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'grey',
    fontSize: 25,
    paddingLeft: 10,
    paddingBottom: 5,
    width: 250,
  },
  name: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'grey',
    fontSize: 20,
    paddingLeft: 10,
    width: 250,
  },
  email: {
    alignSelf: 'center',
    color: 'white',
    marginBottom: 100,
    backgroundColor: 'grey',
    fontSize: 20,
    paddingLeft: 10,
    width: 250,
  },
  head: {
    display: 'flex',
  },
});
