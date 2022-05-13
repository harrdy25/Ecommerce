import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Product = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Entypo
            name="chevron-left"
            size={35}
            style={styles.MenuIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Title}>Product</Text>
        </View>
        <View style={{borderWidth: 1}} />
        <Text style={styles.Fashion}>Ad title*</Text>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="Title name...." />
        </View>
        <Text style={styles.Fashion}>Additional information*</Text>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="Add Descriptions" />
        </View>
        <Text style={styles.Fashion}>Upload Images*</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Entypo name="image" size={50} />
          <Entypo name="image" size={50} />
          <Entypo name="image" size={50} />
          <Entypo name="image" size={50} />
        </View>
        <Text style={styles.Fashion}>₹ Price*</Text>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="₹ 00.0" />
        </View>

        <TouchableOpacity style={styles.SubmitBox}>
          <Text style={styles.Submit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Product;

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
    margin: 10,
  },
  NameBox: {
    borderRadius: 8,
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 5,
  },
  Name: {
    fontSize: 18,
    padding: 10,
  },
  SubmitBox: {
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 5,
    backgroundColor: '#ffa000',
    marginTop: 40,
  },
  Submit: {
    fontSize: 20,
    padding: 8,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
