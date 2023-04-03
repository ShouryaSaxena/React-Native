/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Axios from 'axios';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  // Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  // TouchableHighlight,
} from 'react-native';

const req = {
  email: 'eve.holt@reqres.in',
  password: 'pistol',
};

function HomeScreen({navigation}) {
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
        <TouchableOpacity
          onPress={async () => {
            await Axios.post('https://reqres.in/api/login', req)
              .then(async res => {
                //setUsers(res.data.results);
                console.log(req);
                Alert.alert(`Login Successful for ${req.email}`);
                UserLogin;
                navigation.navigate('Login');
              })
              .catch(error => {
                console.log('Authentication Failed');
              });
          }}
          style={styles.login}>
          <View>
            <Text style={{color: 'white', alignSelf: 'center'}}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await Axios.post('https://reqres.in/api/register', req)
              .then(async res => {
                //setUsers(res.data.results);
                console.log(req);
                Alert.alert('Registration Successful');
                UserLogin;
                navigation.navigate('Register');
              })
              .catch(error => {
                console.log('Authentication Failed');
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

function UserLogin() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://reqres.in/api/login')
      .then(({data}) => {
        console.log('defaultApp -> data', data.data);
        setData(data.data);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Employee Details: </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({item}) => {
            console.log('item', item);
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(`Pantone_value: ${item.pantone_value}`);
                  }}>
                  <Text style={styles.content}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: 'white',
                        marginBottom: 10,
                      }}>
                      Bio Data: #{item.id}
                    </Text>
                  </Text>
                  <Text style={styles.name}>Name: {item.name}</Text>
                  <Text style={styles.name}>Year: {item.year}</Text>
                  <Text style={styles.name}>Color: {item.color}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

function UserRegister() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://reqres.in/api/register')
      .then(({data}) => {
        console.log('defaultApp -> data', data.data);
        setData(data.data);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Employee Details: </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({item}) => {
            console.log('item', item);
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(`Pantone_value: ${item.pantone_value}`);
                  }}>
                  <Text style={styles.content}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: 'white',
                        marginBottom: 10,
                      }}>
                      Bio Data: #{item.id}
                    </Text>
                  </Text>
                  <Text style={styles.name}>Name: {item.name}</Text>
                  <Text style={styles.name}>Year: {item.year}</Text>
                  <Text style={styles.name}>Color: {item.color}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={UserLogin} />
        <Stack.Screen name="Register" component={UserRegister} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
