/* eslint-disable prettier/prettier */
// import {Alert} from 'react-native';
import Axios from 'axios';
// import UserLogin from '../../screens/UserLogin';
// import UserRegister from '../../screens/UserRegister';

class HTTP_Services {
  constructor () {
  }
  static get instance() {
    return new HTTP_Services();
  }
    public async postService(Api: any, req: any) {
    await Axios.post(Api, req).then(res => {
      console.log(req);
      console.log(res.data);
      return res;
    }).catch((error) => {console.log(error);});
  }
  public async getService(Api: any) {
    let data = null;
    await Axios.get(Api).then((res) => {
      // console.log('defaultApp -> data', res.data);
      data = res.data.data;
    }).catch((error) => {console.log(error);});
    // console.log(data);
    return data;
  }
}

export const services = HTTP_Services.instance;

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
