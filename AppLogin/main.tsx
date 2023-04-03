/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import Axios from 'axios';
const showDetails() {
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   Axios.get('https://reqres.in/api/users?page=1')
  //     .then(({data}) => {
  //       console.log('defaultApp -> data', data.data);
  //       setData(data.data);
  //     })
  //     .catch(error => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  const getUsers = () => {
    setLoading(true);
    Axios.get('https://reqres.in/api/login').then(res => {
      //setUsers(res.data.results);
      setData(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    });
  };

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
                      Alert.alert(`id: ${item.pantone_value}`);
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
                    <Text style={styles.name}>
                      Name: {item.first_name} {item.last_name}
                    </Text>
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

export default showDetails;