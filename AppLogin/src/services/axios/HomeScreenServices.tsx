/* eslint-disable prettier/prettier */
// import {Alert} from 'react-native';
import Axios from 'axios';
import {useState} from 'react';
// import UserLogin from '../../screens/UserLogin';
// import UserRegister from '../../screens/UserRegister';

export async function POST(Api: any, req: any) {
  Axios.post(Api, req).then(res => {
    console.log(req);
    return res;
  });
}

export async function GET(Api: any) {
  const [data, setData] = useState([]);
  Axios.get(Api).then(({data}) => {
    console.log('defaultApp -> data', data.data);
    setData(data.data);
  });
}

// export async function Register_Post({navigation}, req: any) {
//   console.log(API.REGISTER);
//   await Axios.post(API.REGISTER, req)
//     .then(async res => {
//       //setUsers(res.data.results);
//       console.log(req);
//       Alert.alert('Registered Successfully');
//       UserRegister;
//       navigation.navigate('Register');
//     })
//     .catch(error => {
//       console.log(JSON.stringify(error));
//       Alert.alert('Authentication Failed');
//     });
// }
