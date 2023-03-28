/* eslint-disable @typescript-eslint/no-shadow */
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
  Alert,
} from 'react-native';
import Axios from 'axios';
export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://reqres.in/api/users?page=2')
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
                    Alert.alert(`Email: ${item.email}`);
                  }}>
                  <Text style={styles.item}>
                    <Image style={styles.logo} source={{uri: item.avatar}} />{' '}
                    {item.first_name} {item.last_name}
                  </Text>
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
    backgroundColor: 'black',
  },
  title: {
    fontSize: 32,
    padding: '5%',
  },
  item: {
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    color: 'black',
    backgroundColor: 'white',
    fontSize: 25,
    borderRadius: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 5,
  },
  head: {
    display: 'flex',
  },
});
