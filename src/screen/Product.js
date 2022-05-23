import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, insertProduct } from '../redux/action/Product.Action';

const Product = ({ navigation }) => {

  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();
  const Iproduct = useSelector(state => state.product);

  const handlerSubmit = () => {
    let pData = {
      name, info, price
    }
    dispatch(insertProduct(pData));
  }

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Entypo
            name="chevron-left"
            size={35}
            style={styles.MenuIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Title}>Product</Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <Text style={styles.Fashion}>Ad title*</Text>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="Title name...." 
          onChangeText={(text) => setName(text)}
          />
        </View>
        <Text style={styles.Fashion}>Additional information*</Text>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="Add Descriptions" onChangeText={(text) => setInfo(text)}/>
        </View>
        {/* <Text style={styles.Fashion}>Upload Images*</Text> */}
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Entypo name="image" size={50} />
          <Entypo name="image" size={50} />
          <Entypo name="image" size={50} />
          <Entypo name="image" size={50} />
        </View> */}
        <Text style={styles.Fashion}>₹ Price*</Text>
        <View style={styles.NameBox}>
          <TextInput style={styles.Name} placeholder="₹ 00.0"
          onChangeText={(text) => setPrice(text)} />
        </View>

        <TouchableOpacity style={styles.SubmitBox} onPress={() => handlerSubmit()}>
          <Text style={styles.Submit}>Submit</Text>
        </TouchableOpacity>
        <View>
          <FlatList
            data={Iproduct.product}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
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
    marginTop: 10,
  },
  Submit: {
    fontSize: 20,
    padding: 8,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
