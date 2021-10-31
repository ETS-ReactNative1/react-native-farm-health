import React from 'react'
import { View, Text,Image ,ScrollView, SafeAreaView,StyleSheet,StatusBar} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Poultry from './Poultry'
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

export default function PoultryNav() {
    return (
       
        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: "#3d9160",
            inactiveTintColor: "#41d980"
          }}
        >
          <Tabs.Screen
            name="Diseases"
            component={Poultry}
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
const imageback = 'https://www.ogscapital.com/wp-content/uploads/2014/12/farming-business-780x440.jpg'
const imagetwo ='https://previews.123rf.com/images/davit85/davit851907/davit85190703843/127762660-indoors-chicken-farm-chicken-feeding-farm-for-growing-broiler-chickens.jpg'
const imagethree ='https://kj1bcdn.b-cdn.net/media/27915/poultry-farm1.jpg?format=webp&width=1080&upscale=false'
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View  style={tw`container mx-auto max-w-7x1`}>
             <View style={tw`flex flex-wrap w-full mb-4 `}>
             <View style={tw`w-full mb-6 lg:mb-0`}>

             <Header>FEEDS AND FEEDING </Header>
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
                     
                      <Text style={tw`leading-relaxed text-base`}>
                      • Chickens should have access to feed at all times
                        • Some supplementation with table scraps is okay but should not be the bulk of their diet.
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      • Grass and insects are beneficial feedstuffs for chickens. 
                        • Depending on the breed, age and weather, your hen will eat between 110-250 grams of feed per day. (0.24 – 0.55 lbs of feed per day).
                      </Text>

                     
                      
                      </View>
                    </View>  


                    <View style={tw`xl:w-1/3 md:w-1/2 p-4`}>
                      <View style={tw`bg-white p-6 rounded-lg`}>
                      <Image
                      source={imagetwo}
                      style={tw`lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6`}
                      />
                     

                      <Text style={tw`leading-relaxed text-base`}>
                      • Depending on the breed, age and weather, your hen will eat between 110-250 grams of feed per day. (0.24 – 0.55 lbs of feed per day).
                        • Oyster shell or grit is recommended for proper digestion and calcium levels.
                        • Always provide clean, fresh water daily.
                      </Text>
                      </View>
                    </View>  


                    <View style={tw`xl:w-1/3 md:w-1/2 p-4`}>
                      <View style={tw`bg-white p-6 rounded-lg`}>
                      <Image
                      source={imagethree}
                      style={tw`lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6`}
                      />
                     

                      <Text style={tw`leading-relaxed text-base`}>
                     
                      To ensure proper nutrition: Check bag labels to ensure you are feeding the right feed to the right aged birds. Do not feed moldy or insect-infested feed. Keep feed away from rodents or birds. Medicated vs Non-Medicated Medicated feed often has Amprolium which is used to prevent coccidiosis. It is not harmful to humans.
                    
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


