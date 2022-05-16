import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const Home = ({navigation}) => {
  const count = useSelector(state => state.counter)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Entypo
            name="menu"
            size={35}
            style={styles.MenuIcon}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.Title}>Home {count.count}</Text>
        </View>
        <View style={{borderWidth: 1}} />
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 5,
            }}
            onPress={() => navigation.navigate('Product')}>
            <MaterialCommunityIcons name="alpha-f-box" size={30} />
            <Text style={styles.Fashion}>Fashion</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </TouchableOpacity>
          <View style={{borderWidth: 1}} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            <Entypo name="mobile" size={30} />
            <Text style={styles.Fashion}>Mobile</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </View>
          <View style={{borderWidth: 1}} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            <Entypo name="tv" size={30} />
            <Text style={styles.Fashion}>Electronics & Appliances</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </View>
          <View style={{borderWidth: 1}} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            <Entypo name="home" size={30} />
            <Text style={styles.Fashion}>Home Decore</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </View>
          <View style={{borderWidth: 1}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: 10,
  },
  Title: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    marginRight: 60,
  },
  Fashion: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    alignSelf: 'center',
    marginLeft: 10,
  },
});
