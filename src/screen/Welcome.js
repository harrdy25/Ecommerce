import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {images} from '../assets/Images';
// import {FAB, Portal, Provider} from 'react-native-paper';


const Welcome = ({navigation}) => {

  // const [state, setState] = useState({open: false});
  // const onStateChange = ({open}) => setState({open});
  // const {open} = state;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Image style={styles.Images} source={images.IMG_GRABBY_PNG} />
        </View>
        {/* <Provider>
          <Portal>
            <FAB.Group
              open={open}
              icon={open ? 'calendar-today' : 'plus'}
              actions={[
                {icon: 'plus', onPress: () => console.log('Pressed add')},
                {
                  icon: 'star',
                  label: 'Star',
                  onPress: () => console.log('Pressed star'),
                },
                {
                  icon: 'email',
                  label: 'Email',
                  onPress: () => console.log('Pressed email'),
                },
                {
                  icon: 'bell',
                  label: 'Remind',
                  onPress: () => console.log('Pressed notifications'),
                  small: false,
                },
              ]}
              onStateChange={onStateChange}
              onPress={() => {
                if (open) {
                }
              }}
            />
          </Portal>
        </Provider> */}
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: 10,
  },
  Images: {
    height: 300,
    width: 250,
  },
});
