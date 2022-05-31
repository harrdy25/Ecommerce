import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import Entypo from 'react-native-vector-icons/Entypo';
  import {images} from '../assets/Images';
  
  const Cart = ({navigation}) => {
   
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              name="chevron-left"
              size={35}
              style={styles.MenuIcon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.Title}>Cart</Text>
            <Entypo name="shopping-cart" size={30} style={styles.MenuIcon} />
          </View>
          <View>
            <Text style={styles.ItemCart}>Items in Our Cart</Text>
          </View>
          <ScrollView>
            <>
              <View style={styles.Card}>
                <Image style={styles.Image} source={images.IMG_FOOD} />
                <View style={{flex: 1, alignSelf: 'center'}}>
                  <Text style={styles.ProductName}>The Place - Fruit Salad</Text>
                  <Text style={styles.Price}>₹ 251</Text>
                  <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Entypo
                      name="squared-minus"
                      size={25}
                      style={styles.PlusIcon}
                      color={'gray'}
                    />
                    <Text style={styles.Quantity}>1</Text>
                    <Entypo
                      name="squared-plus"
                      size={25}
                      style={styles.PlusIcon}
                      color={'#ffa000'}
                    />
                  </View>
                </View>
                <Entypo name="cross" size={25} style={styles.CrossIcon} />
              </View>
              <View style={styles.Card}>
                <Image style={styles.Image} source={images.IMG_BURGER} />
                <View style={{flex: 1, alignSelf: 'center'}}>
                  <Text style={styles.ProductName}>HumBurger</Text>
                  <Text style={styles.Price}>₹ 251</Text>
                  <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Entypo
                      name="squared-minus"
                      size={25}
                      style={styles.PlusIcon}
                      color={'gray'}
                    />
                    <Text style={styles.Quantity}>1</Text>
                    <Entypo
                      name="squared-plus"
                      size={25}
                      style={styles.PlusIcon}
                      color={'#ffa000'}
                    />
                  </View>
                </View>
                <Entypo name="cross" size={25} style={styles.CrossIcon} />
              </View>
              <View style={styles.Card}>
                <Image style={styles.Image} source={images.IMG_FRIES} />
                <View style={{flex: 1, alignSelf: 'center'}}>
                  <Text style={styles.ProductName}>French Fries</Text>
                  <Text style={styles.Price}>₹ 251</Text>
                  <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Entypo
                      name="squared-minus"
                      size={25}
                      style={styles.PlusIcon}
                      color={'gray'}
                    />
                    <Text style={styles.Quantity}>1</Text>
                    <Entypo
                      name="squared-plus"
                      size={25}
                      style={styles.PlusIcon}
                      color={'#ffa000'}
                    />
                  </View>
                </View>
                <Entypo name="cross" size={25} style={styles.CrossIcon} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 16,
                  marginVertical: 16,
                }}>
                <Text style={styles.SubTotal}>Sub Total:</Text>
                <Text style={styles.Price}>₹ 753</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 16,
                  marginVertical: 16,
                }}>
                <Text style={styles.SubTotal}>Delivery Fees:</Text>
                <Text style={styles.Price}>₹ 60</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 16,
                  marginVertical: 16,
                }}>
                <Text style={styles.SubTotal}>Total:</Text>
                <Text style={styles.Price}>₹ 813</Text>
              </View>
              <TouchableOpacity style={styles.ProceedBox}>
                <Text style={styles.Proceed}>Proceed To Payment</Text>
              </TouchableOpacity>
            </>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Cart;
  
  const styles = StyleSheet.create({
    MenuIcon: {
      marginHorizontal: 16,
      alignSelf: 'center',
    },
    Title: {
      fontSize: 22,
      fontWeight: '800',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1,
    },
    ItemCart: {
      fontSize: 20,
      fontWeight: '600',
      marginLeft: 16,
      marginVertical: 10,
    },
    Card: {
      backgroundColor: 'white',
      marginHorizontal: 16,
      borderRadius: 15,
      marginVertical: 8,
      shadowColor: '#000000',
      shadowOffset: {
        height: 1,
        width: 0.0,
      },
      shadowOpacity: 0.2,
      // shadowRadius: 5,
      flexDirection: 'row',
    },
    Image: {
      height: 80,
      width: 100,
      borderRadius: 15,
      marginLeft: 5,
      margin: 8,
    },
    CrossIcon: {
      margin: 8,
    },
    ProductName: {
      fontSize: 18,
      marginLeft: 10,
      marginVertical: 5,
    },
    Price: {
      fontSize: 18,
      marginLeft: 10,
      fontWeight: '700',
    },
    Quantity: {
      fontSize: 20,
      fontWeight: '600',
      marginHorizontal: 8,
    },
    SubTotal: {
      fontSize: 18,
      fontWeight: '700',
      flex: 1,
    },
    ProceedBox: {
      borderRadius: 8,
      marginHorizontal: 16,
      backgroundColor: '#ffa000',
      marginTop: 30,
    },
    Proceed: {
      fontSize: 20,
      padding: 12,
      fontWeight: '700',
      textAlign: 'center',
      color: 'white',
    },
  });