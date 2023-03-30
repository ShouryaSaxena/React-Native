/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Axios from 'axios';
import {
  FlatList,
  SafeAreaView,
  // StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  // Button,
  Alert,
  TouchableOpacity,
  // TouchableHighlight,
} from 'react-native';

export default function App(this: any) {
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const userLogin = () => {
    Alert.alert('Login Button Pressed');
  };

  const req = {
    email: 'abc@gmail.com',
    password: 'password',
  };

  const registerUser = async () => {
    setLoading(true);
    await Axios.post('https://reqres.in/api/register', req).then(res => {
      //setUsers(res.data.results);
      console.log(req);
      setLoading(false);
    });
    Alert.alert('Register Button Pressed');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Dental Care</Text>
      <Image style={styles.logo} source={require('./logo.png')} />
      <TextInput
        textContentType="emailAddress"
        placeholder="E-mail Address"
        style={styles.primaryInput}
      />
      <TextInput
        textContentType="password"
        placeholder="Password"
        style={styles.primaryInput}
      />
      <View style={styles.options}>
        <TouchableOpacity onPress={() => userLogin()} style={styles.login}>
          <View>
            <Text style={{color: 'white', alignSelf: 'center'}}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => registerUser()}
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
});
