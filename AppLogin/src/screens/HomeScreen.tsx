/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Password from '../components/Password';
// import {Login_Post, Register_Post} from '../services/axios/HomeScreenServices';
import {API} from '../services/axios/ApiDetails';
import {services} from '../services/axios/HTTP_Services';
// import {POST} from '../services/axios/HTTP_Services';
// import UserLogin from './UserLogin';
// import uPassword from '../components/Password';

// const user = {
//   email: 'eve.holt@reqres.in',
//   password: 'pistol',
// };

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
      <Password
        setValue={(value: any) => {
          console.log(value);
          if (value === 'pistol') {
            setPassword(value);
          } else {
            setPassword('');
          }
        }}
      />
      <View style={styles.options}>
        <TouchableOpacity
          onPress={async () => {
            // console.log(uEmail, uPassword);
            const req = {
              email: uEmail.toLocaleLowerCase(),
              password: uPassword,
            };
            const login = await services.postService(API.LOGIN, req);
            console.log(login);
            navigation.navigate('Login');
            //console.log(API.LOGIN);
            // if (req === user) {
            //   const login = await services.postService(API.LOGIN, req);
            // } else {
            //   Alert.alert('Authentication Failed');
            // }
            //console.log(JSON.stringify(response));
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
            const register = await services.postService(API.REGISTER, req);
            console.log(register);
            navigation.navigate('Register');
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
