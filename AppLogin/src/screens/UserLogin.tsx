/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
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
  Alert,
} from 'react-native';
import {API} from '../services/axios/ApiDetails';
// import {GET} from '../services/axios/HomeScreenServices';
import { services } from '../services/axios/HTTP_Services';

export default function UserLogin() {
  const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState<null | String[]>();

  useEffect(() => {
    const data = services.getService(API.LOGIN);
    console.log(data);
    // console.log(data.data);
    // setData(data);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>List of Resources: </Text>
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
                      Resource #{item.id}
                    </Text>
                  </Text>
                  <Text style={styles.name}>Name: {item.name}</Text>
                  <Text style={styles.name}>Year: {item.year}</Text>
                  <Text style={styles.color}>Color: {item.color}</Text>
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
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'turquoise',
  },
  title: {
    fontSize: 32,
    padding: '5%',
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  content: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: '#000000',
    fontSize: 25,
    paddingLeft: 30,
    paddingBottom: 5,
    width: 250,
    borderTopLeftRadius: 30,
  },
  name: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: '#6D5D66',
    fontSize: 20,
    paddingLeft: 30,
    width: 250,
  },
  color: {
    alignSelf: 'center',
    color: 'white',
    marginBottom: 20,
    backgroundColor: '#6D5D66',
    fontSize: 20,
    paddingLeft: 30,
    paddingBottom: 5,
    width: 250,
    borderBottomRightRadius: 30,
  },
  head: {
    display: 'flex',
  },
});
