import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {images} from '../assets/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { clickLogin } from '../redux/action/user.action';

const Login = ({navigation}) => {

  const [hidePass, setHidePass] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.users);

  const handleLogin = () => {
    let loginData = {
      email,
      password,
    };

    dispatch(clickLogin(loginData, navigation));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Entypo
          name="chevron-left"
          size={35}
          style={styles.MenuIcon}
          onPress={() => navigation.goBack()}
        />
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Image style={styles.Logo} source={images.IMG_GRABBY_PNG} />
        </View>
        <Text style={styles.SignUp}>WELCOME BACK</Text>

        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="Email"
          autoCapitalize='none'
          onChangeText={email => setEmail(email)} />
        </View>
        <View style={[styles.NameBox, {flexDirection: 'row'}]}>
          <TextInput style={styles.Name} 
          placeholder="Password" 
          flex={1} 
          onChangeText={email => setPassword(email)}
          secureTextEntry={hidePass ? true : false}
          />
          <Ionicons name={hidePass ? 'eye-off' : 'eye'} style={styles.MenuIcon} size={20} onPress={() => setHidePass(!hidePass)}/>
        </View>
        <Text onPress={() => navigation.navigate('Shopping')}
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginVertical: 10,
            color: '#c67100',
            fontWeight: '600',
          }}>
          Forgot Password?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Ionicons name="logo-google" style={styles.MenuIcon} size={40} />
          <Ionicons name="logo-facebook" style={styles.MenuIcon} size={40} />
          <Ionicons name="logo-twitter" style={styles.MenuIcon} size={40} />
        </View>
        <TouchableOpacity
          style={styles.SignUpBox}
          onPress={() => handleLogin()}>
          <Text style={styles.Sign}>Login</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 18, textAlign: 'center'}}>
          Don't have an account?{' '}
          <Text
            style={styles.Login}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: 10,
  },
  Logo: {
    height: 100,
    width: 90,
  },
  SignUp: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 10,
    marginVertical: 50,
  },
  NameBox: {
    borderRadius: 8,
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  Name: {
    fontSize: 18,
    padding: 10,
  },
  SignUpBox: {
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#ffa000',
  },
  Sign: {
    fontSize: 20,
    padding: 8,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
  Login: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffa000',
  },
});
