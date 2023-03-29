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
export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
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
    Axios.get(`https://reqres.in/api/users?page=${currentPage}`).then(res => {
      //setUsers(res.data.results);
      setData(res.data.data);
      setLoading(false);
    });
  };

  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <View style={styles.head}>
  //         <Text style={styles.title}>Employee Details: </Text>
  //       </View>
  //       {isLoading ? (
  //         <ActivityIndicator />
  //       ) : (
  //         <FlatList
  //           data={data}
  //           keyExtractor={(item, index) => {
  //             // console.log("index", index)
  //             return index.toString();
  //           }}
  //           renderItem={({item}) => {
  //             console.log('item', item);
  //             return (
  //               <View>
  //                 <View style={styles.imgContainer}>
  //                   <Image style={styles.logo} source={{uri: item.avatar}} />
  //                 </View>
  //                 <TouchableOpacity
  //                   onPress={() => {
  //                     Alert.alert(`Email: ${item.email}`);
  //                   }}>
  //                   <Text style={styles.item}>
  //                     <Text
  //                       style={{
  //                         fontWeight: 'bold',
  //                         fontSize: 30,
  //                         color: 'white',
  //                         marginBottom: 10,
  //                       }}>
  //                       Bio Data: #{item.id}
  //                     </Text>
  //                   </Text>
  //                   <Text style={styles.name}>
  //                     Name: {item.first_name} {item.last_name}
  //                   </Text>
  //                   <Text style={styles.email}>Email: {item.email}</Text>
  //                 </TouchableOpacity>
  //               </View>
  //             );
  //           }}
  //         />
  //       )}
  //     </SafeAreaView>
  //   );
  // }

  const renderItem = ({item}) => {
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
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Employee Details: </Text>
      </View>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
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
