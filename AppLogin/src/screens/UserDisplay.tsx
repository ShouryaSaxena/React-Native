/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import {
    ActivityIndicator,
    StyleSheet,
    FlatList,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    // StatusBar,
    Alert,
  } from 'react-native';
  import { API } from '../services/axios/ApiDetails';

export default async function FetchComponent() {
  // const [id, setId] = useState(1);
  Alert.alert('Pantone_value');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<null | String[]>();

  useEffect(() => {
    useFetch(API.UserData).then(data => {
      console.log(data);
      setData(data);
      setLoading(false);
      // Alert.alert('Login Successful');
    });
    // console.log(data.data);
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
                    <View style={styles.imgContainer}>
                      <Image style={styles.logo} source={{uri: item.avatar}} />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert(`Email: ${item.email}`);
                      }}>
                      <Text style={styles.item}>
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
                      <Text style={styles.name}>
                        Name: {item.first_name} {item.last_name}
                      </Text>
                      <Text style={styles.email}>Email: {item.email}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          )}
        </SafeAreaView>
      );
}
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: '100%',
      padding: '5%',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'pink',
    },
    title: {
      fontSize: 32,
      padding: '5%',
      color: 'black',
      fontWeight: 'bold',
      fontFamily: 'serif',
    },
    imgContainer: {
      height: 250,
      width: 250,
      alignSelf: 'center',
      backgroundColor: 'white',
    },
    item: {
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
      marginBottom: 50,
      backgroundColor: 'grey',
      fontSize: 20,
      paddingLeft: 10,
      width: 250,
    },
    logo: {
      width: 225,
      height: 225,
      marginTop: 10,
      alignSelf: 'center',
    },
    head: {
      display: 'flex',
    },
  });
