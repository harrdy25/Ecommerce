import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../redux/action/counter.action';

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter);

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    return (
        <View style={{marginTop: 50}}>
            <TouchableOpacity
            onPress={() => handleIncrement()}>
            <Text>+</Text>
            </TouchableOpacity>
            
            <Text>{count.count}</Text>

            <TouchableOpacity
            onPress={() => handleDecrement()}>
            <Text>-</Text>
            </TouchableOpacity>

        </View>
    )
}