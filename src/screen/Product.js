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
import { deleteProduct, fetchProduct, insertProduct, updateProduct } from '../redux/action/Product.Action';

const Product = ({ navigation }) => {
  const [update, setUpdate] = useState(0);
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [id, setId] = useState(0);

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  const handlerSubmit = () => {
    let pData = {
      name, info, price, area
    }
    dispatch(insertProduct(pData));
  }

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  const handleEdit = (id) => {
    let fData = product.product.filter((p) => p.id === id);
    setName(fData[0].name);
    setInfo(fData[0].info);
    setArea(fData[0].area);
    setPrice(fData[0].price);
    setId(id);
    setUpdate(1);
  }

  const handlerUpdate = () => {
    let pData = {
      id: id,
      name, info, price, area
    }

    dispatch(updateProduct(pData))

  }

  console.log("bbbbbb", name);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.Box}>
        <View style={{ margin: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.TitleName}>{item.name}</Text>
            <Text style={styles.Price}>₹ {item.price}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.Information}>{item.info}</Text>
              <Text style={styles.Area}>{item.area}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Entypo
                  name="cross"
                  size={30}
                  color={'red'}
                  style={styles.Icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEdit(item.id)}>
                <Entypo
                  name="edit"
                  size={25}
                  color={'green'}
                  style={styles.Icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

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
          <TextInput value={name} style={styles.Name} placeholder="Title name...."
            onChangeText={(text) => setName(text)}
          />
        </View>
        <Text style={styles.Fashion}>Additional information*</Text>
        <View style={styles.NameBox}>
          <TextInput value={info} style={styles.Name} placeholder="Add Descriptions" onChangeText={(text) => setInfo(text)} />
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
          <TextInput value={price} style={styles.Name} placeholder="₹ 00.0"
            onChangeText={(text) => setPrice(text)} />
        </View>
        <Text style={styles.Fashion}>Area*</Text>
        <View style={styles.NameBox}>
          <TextInput value={area} style={styles.Name} placeholder="address...."
            onChangeText={(text) => setArea(text)} />
        </View>
        {
          update ?
            <TouchableOpacity style={styles.SubmitBox} onPress={() => handlerUpdate()}>
              <Text style={styles.Submit}>Update</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.SubmitBox} onPress={() => handlerSubmit()}>
              <Text style={styles.Submit}>Submit</Text>
            </TouchableOpacity>
        }

        <View>
          <FlatList
            data={product.product}
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
  Box: {
    marginHorizontal: 16,
    marginVertical: 5,
    backgroundColor: '#bdbdbd',
    borderRadius: 10,
  },
  TitleName: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  Price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#003d00'
  },
  Information: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  Area: {
    fontSize: 14,
    fontWeight: '600',
  },
  Icon: {
    marginHorizontal: 10,
  },
});
