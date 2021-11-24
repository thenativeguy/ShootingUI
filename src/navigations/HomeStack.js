import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import ScoreBoard from '../screens/ScoreBoard';
import GamerOver from '../screens/GamerOver';

const StackHome = createNativeStackNavigator();
const HomeStack = () => {
    return (
       <StackHome.Navigator>
           <StackHome.Screen name="Home" component={Home} options={{headerShown: false}} />
           <StackHome.Screen name="Gamer over" component={GamerOver} options={{headerShown: false}} />
           <StackHome.Screen name="Scoreboard" component={ScoreBoard} options={{headerShown: false}} />
       </StackHome.Navigator>
    )
}

export default HomeStack
