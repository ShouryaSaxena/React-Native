/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {API} from './ApiDetails';
import {Alert} from 'react-native';
import Axios from 'axios';
import UserLogin from '../../screens/UserLogin';
import UserRegister from '../../screens/UserRegister';

export async function Login_Post({navigation},req: any) {
  console.log(API.LOGIN);
  await Axios.post(API.LOGIN, req)
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
}

export async function Register_Post({navigation}, req: any) {
    console.log(API.LOGIN);
    await Axios.post(API.LOGIN, req)
      .then(async res => {
        //setUsers(res.data.results);
        console.log(req);
        Alert.alert(`Login Successful for ${req.email}`);
        UserRegister;
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        Alert.alert('Authentication Failed');
      });
  }
