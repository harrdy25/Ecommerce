import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
  } from 'react-native';
  import React, {useState} from 'react';
  import Entypo from 'react-native-vector-icons/Entypo';
  import {images} from '../assets/Images';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {Searchbar} from 'react-native-paper';
  import {Rating} from 'react-native-ratings';
  
  const Shopping = ({navigation}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              name="menu"
              size={35}
              style={styles.MenuIcon}
              onPress={() => navigation.openDrawer()}
            />
            <Text style={styles.Title}>GRABBY</Text>
            <Entypo name="shopping-cart" size={30} style={styles.MenuIcon} onPress={() => navigation.navigate('Cart')} />
          </View>
          <Searchbar
            style={styles.Search}
            placeholder="Search for anything on Grabby"
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <>
              <View style={{flexDirection: 'row', marginHorizontal: 16}}>
                <Text style={styles.Cetagories}>Trending</Text>
                <Text style={styles.SeeAll}>See All</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 16,
                  justifyContent: 'space-between',
                }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <ImageBackground
                    style={styles.Images}
                    source={images.IMG_FASHION}>
                    <View style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}} />
                    <Text style={styles.Food}>Fashion</Text>
                  </ImageBackground>
  
                  <ImageBackground style={styles.Images} source={images.IMG_FOOD}>
                    <View style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}} />
                    <Text style={styles.Food}>Food</Text>
                  </ImageBackground>
                  <ImageBackground style={styles.Images} source={images.IMG_TV}>
                    <View style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}} />
                    <Text style={styles.Food}>Computer</Text>
                  </ImageBackground>
                  <ImageBackground
                    style={styles.Images}
                    source={images.IMG_MOBILE}>
                    <View style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}} />
                    <Text style={styles.Food}>Mobile</Text>
                  </ImageBackground>
                </ScrollView>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 16,
                  marginBottom: 10,
                }}>
                <Text style={styles.Cetagories}>Trending</Text>
                <Text style={styles.SeeAll}>See All</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 8,
                }}>
                <View style={styles.Card}>
                  <Image
                    style={styles.ShoppingImages}
                    source={images.IMG_FOOD}
                  />
                  <Text style={styles.ProductName}>The Place - Fruit Salad</Text>
                  <Text style={styles.Price}>₹ 251</Text>
                  <Rating
                    style={styles.Rating}
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                  />
                  <TouchableOpacity style={styles.AddToCartBox}>
                    <Text style={styles.AddToCart}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.Card}>
                  <Image
                    style={styles.ShoppingImages}
                    source={images.IMG_FASHION}
                  />
                  <Text style={styles.ProductName}>White Hoodio</Text>
                  <Text style={styles.Price}>₹ 999</Text>
                  <Rating
                    style={styles.Rating}
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                  />
                  <TouchableOpacity style={styles.AddToCartBox}>
                    <Text style={styles.AddToCart}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 16,
                }}>
                <Text style={styles.Cetagories}>Merchants</Text>
                <Text style={styles.SeeAll}>See All</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 8,
                }}>
                <View style={styles.Card}>
                  <Image
                    style={styles.ShoppingImages}
                    source={images.IMG_TV}
                  />
                  <Text style={styles.ProductName}>Mac Book Pro</Text>
                  <Text style={styles.Price}>₹ 111000</Text>
                  <Rating
                    style={styles.Rating}
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                  />
                  <TouchableOpacity style={styles.AddToCartBox}>
                    <Text style={styles.AddToCart}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.Card}>
                  <Image
                    style={styles.ShoppingImages}
                    source={images.IMG_MOBILE}
                  />
                  <Text style={styles.ProductName}>Samsung s21 ultra</Text>
                  <Text style={styles.Price}>₹ 111100</Text>
                  <Rating
                    style={styles.Rating}
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                  />
                  <TouchableOpacity style={styles.AddToCartBox}>
                    <Text style={styles.AddToCart}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 8,
                }}>
                <View style={styles.Card}>
                  <Image
                    style={styles.ShoppingImages}
                    source={images.IMG_FOOD}
                  />
                  <Text style={styles.ProductName}>The Place - Fruit Salad</Text>
                  <Text style={styles.Price}>₹ 251</Text>
                  <Rating
                    style={styles.Rating}
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                  />
                  <TouchableOpacity style={styles.AddToCartBox}>
                    <Text style={styles.AddToCart}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.Card}>
                  <Image
                    style={styles.ShoppingImages}
                    source={images.IMG_FASHION}
                  />
                  <Text style={styles.ProductName}>White Hoodio</Text>
                  <Text style={styles.Price}>₹ 999</Text>
                  <Rating
                    style={styles.Rating}
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                  />
                  <TouchableOpacity style={styles.AddToCartBox}>
                    <Text style={styles.AddToCart}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Shopping;
  
  const styles = StyleSheet.create({
    MenuIcon: {
      margin: 16,
    },
    Title: {
      fontSize: 22,
      fontWeight: '800',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1,
    },
    Logo: {
      height: 120,
      width: 100,
      marginTop: 50,
    },
    Search: {
      marginHorizontal: 16,
      borderRadius: 8,
    },
    Cetagories: {
      fontWeight: '600',
      fontSize: 24,
      marginTop: 16,
      flex: 1,
    },
    SeeAll: {
      fontWeight: '600',
      fontSize: 20,
      marginTop: 16,
      color: '#ffa000',
    },
    Images: {
      height: 50,
      width: 150,
      borderRadius: 15,
      overflow: 'hidden',
      marginHorizontal: 16,
    },
    Food: {
      position: 'absolute',
      fontSize: 22,
      fontWeight: '700',
      color: 'white',
      alignSelf: 'center',
      textAlign: 'center',
      top: 12,
    },
    Card: {
      backgroundColor: 'white',
      alignSelf: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    ShoppingImages: {
      height: 100,
      width: 170,
    },
    AddToCartBox: {
      borderRadius: 8,
      margin: 16,
      backgroundColor: '#ffa000',
    },
    AddToCart: {
      fontSize: 12,
      padding: 10,
      fontWeight: '700',
      textAlign: 'center',
      color: 'white',
    },
    ProductName: {
      fontSize: 14,
      marginLeft: 10,
      marginVertical: 5,
    },
    Price: {
      fontSize: 18,
      marginLeft: 10,
      fontWeight: '700',
    },
    Rating: {
      alignSelf: 'flex-start',
      marginLeft: 10,
    },
  });