import React from 'react'
import { View, Text,Image ,ScrollView, SafeAreaView,StyleSheet,StatusBar} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cattle from './Cattle'
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



          </Tabs.Navigator>
  );
    
} 



 function Feeding({navigation}){
const imageback = 'https://www.allaboutfeed.net/wp-content/uploads/2020/12/001_439_IMG_KopievanHSK194586_17_WEB.jpg'
const imagetwo ='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/7/4/9/2359475-1-eng-GB/Should-producers-hike-zinc-levels-in-high-producing-dairy-cows.jpg'
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View  style={tw`container mx-auto max-w-7x1`}>
             <View style={tw`flex flex-wrap w-full mb-4 `}>
             <View style={tw`w-full mb-6 lg:mb-0`}>

             <Header>Feeding Types</Header>
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
                      Balanced rations for cattle are made up of five basic types of feed. When combined in the right amounts, 
                      these feeds can supply all 
                      the nutrients needed to keep cattle healthy and productive. The five types of feed are:   
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      Bulk forages for energy: These are mostly grass-like plants that have long stems,
                       long narrow leaves and flower spikes and contain a lot of fibre in their structure. 
                       They include fresh materials, 
                      such as green grass, as well as dry materials, such as hay. 
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      They provide most of the energy a cow needs and some minerals and will make up most of the ration – 
                      they are what  fills the animal and stops it feeling hungry. 
                      Most bulk forages contain only low levels of protein. They often grow naturally,
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      such as grass and other plants on roadside reserves or natural pastures, or are the part of the plant left over when crops grown 
                      for people are harvested, such as stovers or straws of maize, sorghum wheat or rice. 
                      Napier grass is often grown on the farm as bulk forage.
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      Supplementary forages for energy and protein: Supplementary forages provide both
                       energy and protein and some minerals. 
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
                      These are fibrous plants, similar to bulk forages, but they are usually especially grown on the farm as feed for cattle and contain higher protein and/or energy levels than bulk forages. 
                      Most are legumes and include herbaceous plants, shrubs and trees.   
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      They are fed in addition to the bulk forages, usually in smaller amounts. They can be used either to compensate
                       for poor quality bulk forages or they can be used as substitutes for concentrates. The feeding value of different 
                       upplementary forages varies; for calliandra, three kilograms of
                       fresh forage is equivalent to one kilogram of a good quality commercial dairy meal.
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      Concentrates for energy and protein: These are feeds that supply more highly concentrated nutrients than
                       forages. They contain high levels of protein or energy or both, and also some minerals. 
                       They are also low in fibre and easy to digest. They include specially made feeds, such as commercial dairy meals,
                       as well as cereal by-products (for example pollard, wheat
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      germ, maize germ) and other high energy and/or high protein feedstuffs (for example molasses, 
                      fish meal and brewers’ dried grains). Cereal grains such as maize, 
                      wheat and barley, if available and economical to feed, fall under this category.
                      </Text>

                      <Text style={tw`leading-relaxed text-base`}>
                      Concentrates are relatively expensive and are therefore fed in relatively small amounts in 
                      addition to forages; 
                      the amounts fed should depend on how much milk the cow is producing.
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



