// import { View, Text } from 'react-native'
// import React, { useEffect } from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrementCounter, incrementCounter } from '../redux/action/counter.action';

// export default function Counter() {
//     const dispatch = useDispatch();
//     const count = useSelector(state => state.counter);

//     const handleIncrement = () => {
//         dispatch(incrementCounter())
//     }

//     const handleDecrement = () => {
//         dispatch(decrementCounter())
//     }

//     useEffect(() => {
//         printStirng();
//       }, []);

//       const printStirng = () => {
//         console.log("Tom");
//         setTimeout(() => {
//           console.log("Joy");
//         }, 2000);
//         console.log("Jerry");
//       }

//     return (
//         <View style={{marginTop: 50}}>
//             <TouchableOpacity
//             onPress={() => handleIncrement()}>
//             <Text>+</Text>
//             </TouchableOpacity>

//             <Text>{count.count}</Text>

//             <TouchableOpacity
//             onPress={() => handleDecrement()}>
//             <Text>-</Text>
//             </TouchableOpacity>

//         </View>
//     )
// }

// Syncronize: One after another, In Order                  // one undefined three
// Asyncronize: Allow other process to run, Not in order    // one Promises<Pending> three    // axios without async await
// Promise is asyncronize  
// async await: Wait for asyncronize call                   // one two (wait for 3 sec) three // axios with async await                                 
// Callback function is called after working some task.
// Promises.all resolve all

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function Counter() {
    const one = () => {
        return "One Value";
    }

    const two = () => {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    resolve("Two Value");
                }, 2000
            )
        })
    }

    const three = () => {
        return "Three Value";
    }

    const All = async () => {
        const oneVal = one();
        console.log(oneVal);

        const twoVal = await two();
        console.log(twoVal);

        const threeVal = three();
        console.log(threeVal);
    }

    useEffect(
        () => {
            All()
        },
    [])

    const dispplay = (z) => {
        console.log(z);
    }
    
    const sum = (callbackFun) => {
        let x=5, y=3, z;
        z = x + y;

        callbackFun(z)
    }

    sum(dispplay);

    return (
        <View>
            <Text>Counter</Text>
        </View>
    )
}