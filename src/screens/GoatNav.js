import React from 'react'
import { View, Text,Image ,ScrollView, SafeAreaView,StyleSheet,StatusBar} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Goats from './Goats'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import tw from 'tailwind-react-native-classnames';
import { SearchBar } from 'react-native-elements';
import  { useState, useEffect } from 'react';

const Tabs = AnimatedTabBarNavigator();

export default function GoatNav() {
    return (
       
        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: "#3d9160",
            inactiveTintColor: "#41d980"
          }}
        >
          <Tabs.Screen
            name="Diseases"
            component={Goats}
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

          </Tabs.Navigator>
  );
    
} 



 function Feeding({navigation}){
const imageback = 'https://news.wttw.com/sites/default/files/field/image/GoatsUGCCrop.jpg'
const imagetwo ='https://previews.123rf.com/images/kurapy11/kurapy111207/kurapy11120700020/14270343-many-goats-on-the-road.jpg'
const imagethree ='http://modernfarmer.com/wp-content/uploads/2019/06/shutterstock_1281840250.jpg'
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View  style={tw`container mx-auto max-w-7x1`}>
             <View style={tw`flex flex-wrap w-full mb-4 `}>
             <View style={tw`w-full mb-6 lg:mb-0`}>

             <Header>Feeding Management</Header>
             <View style={tw`h-1 w-20 bg-green-500 rounded`}></View>
              </View>
             </View>
                <View style={tw`flex flex-wrap -m-4`}>
                    <View style={tw`xl:w-1/3 md:w-1/2 p-4`}>
                      <View style={tw`bg-white p-6 rounded-lg`}>
                      <Image
                      source={imageback}
                      style={tw`lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6`}
                      />
                      <Text style={tw`text-lg text-gray-900 font-medium title-font mb-4`}>
                      1. Extensive Grazing
                      </Text>
                      <Text style={tw`leading-relaxed text-base`}>
                      Grazing the sheep and goat in the entire pasture and leaving them there for the whole season is the extensive system of rearing.  
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      In this method feed cost is very much reduced.
                      It is not conducive to making the best use of the whole grasses. So we can preferably practice the rotational grazing method.
                      Rotational grazing method 
                      </Text>

                     
                      
                      </View>
                    </View>  


                    <View style={tw`xl:w-1/3 md:w-1/2 p-4`}>
                      <View style={tw`bg-white p-6 rounded-lg`}>
                      <Image
                      source={imagetwo}
                      style={tw`lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6`}
                      />
                      <Text style={tw`text-lg text-gray-900 font-medium title-font mb-4`}>
                      2. Semi-intensive 
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      This system has the advantage of
                        • Meeting the nutrient requirement both from grazing and stall feeding.
                        • Managing medium to large flock of 50 to 350 heads and above.
                        • Utilizing cultivated forage during lean period.
                        • Harvesting good crop of kids both for meat and milk.
                      </Text>
                      </View>
                    </View>  


                    <View style={tw`xl:w-1/3 md:w-1/2 p-4`}>
                      <View style={tw`bg-white p-6 rounded-lg`}>
                      <Image
                      source={imagethree}
                      style={tw`lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6`}
                      />
                      <Text style={tw`text-lg text-gray-900 font-medium title-font mb-4`}>
                      3. Intensive system-zero grazing-system
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                     
                        • It is a system in which goats are continuously kept under housing in confinement with limited access to land or otherwise so called zero grazing system of goat production in which they are stall fed.
                        • This system of management requires more labour and high cash input.
                        • However, this has the advantage of close supervision and control over the animals.
                        • In this method the dung is collected in one place and used as a good fertilizer.
                        • Less space is sufficient for more number of animals.
                    
                      </Text>
                      </View>
                    </View>  


                </View>
            </View>

   

            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });


