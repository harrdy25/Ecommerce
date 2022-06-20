import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { images } from '../assets/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { authSignupUser } from '../redux/action/user.action';
import auth from '@react-native-firebase/auth';

const SignIn = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleSignup = () => {
    let data = {
      name,
      email,
      password,
      phone
    }

    dispatch(authSignupUser(data))   

    setEmail('');
    setName('');
    setPassword('');
    setPhone('');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Entypo
          name="chevron-left"
          size={35}
          style={styles.MenuIcon}
          onPress={() => navigation.goBack()}
        />
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          <Image style={styles.Logo} source={images.IMG_GRABBY_PNG} />
        </View>
        <Text style={styles.SignUp}>SIGN UP</Text>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="Name" value={name} onChangeText={(text) => setName(text)} />
        </View>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name}
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)} />
        </View>
        <View style={[styles.NameBox, { flexDirection: 'row' }]}>
          <TextInput
            style={styles.Name}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={hidePass ? true : false}
            flex={1}
          />
          <Ionicons
            name={hidePass ? 'eye-off' : 'eye'}
            style={styles.MenuIcon}
            size={20}
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="Phone no" value={phone} onChangeText={(text) => setPhone(text)} />
        </View>
        <TouchableOpacity
          style={styles.SignUpBox}
          onPress={() => handleSignup()}>
          <Text style={styles.Sign}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <Ionicons name="logo-google" style={styles.MenuIcon} size={30} />
          <Ionicons name="logo-facebook" style={styles.MenuIcon} size={30} />
          <Ionicons name="logo-twitter" style={styles.MenuIcon} size={30} />
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          You have an account already?{' '}
          <Text
            style={styles.Login}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

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
    marginVertical: 5,
    backgroundColor: '#ffa000',
    marginTop: 40,
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
