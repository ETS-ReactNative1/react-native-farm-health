import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cattle from './Cattle'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';



const Tabs = AnimatedTabBarNavigator();

export default function CattleNav() {
    return (
       
        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: "#3d9160",
            inactiveTintColor: "#41d980"
          }}
        >
          <Tabs.Screen
            name="Diseases"
            component={Cattle}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                      name="server"
                      size={size ? size : 24}
                      color={focused ? color : "#3d9160"}
                      focused={focused}
                      color={color}
                  />
              )
            }}
          />

<Tabs.Screen
            name="Feeding Tips"
            component={Feeding}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                      name="key"
                      size={size ? size : 24}
                      color={focused ? color : "#41d980"}
                      focused={focused}
                      color={color}
                  />
              )
            }}
          />


<Tabs.Screen
            name="Search"
            component={SearchBar}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                      name="search"
                      size={size ? size : 24}
                      color={focused ? color : "#41d980"}
                      focused={focused}
                      color={color}
                  />
              )
            }}
          />
          </Tabs.Navigator>
  );
    
} 



 function Feeding(){

    return (
        <View>
            <Text>Feeding types</Text>
        </View>
    );

}


function SearchBar(){

    return (
        <View>
            <Text>Feeding Search....</Text>
        </View>
    );

}
