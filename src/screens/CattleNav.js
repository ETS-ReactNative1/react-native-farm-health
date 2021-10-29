import React from 'react'
import { View, Text,Image ,ScrollView, SafeAreaView} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cattle from './Cattle'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import tw from 'tailwind-react-native-classnames';

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



 function Feeding({navigation}){
const imageback = 'https://www.allaboutfeed.net/wp-content/uploads/2020/12/001_439_IMG_KopievanHSK194586_17_WEB.jpg'
    return (
        <SafeAreaView>
            <ScrollView>
            <View  style={tw`container mx-auto max-w-7x1`}>
             <View style={tw`flex flex-wrap w-full mb-4 `}>
             <View style={tw`w-full mb-6 lg:mb-0`}>

             <h1 style={tw`sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900`}>Feeding Types</h1>
             <View style={tw`h-1 w-20 bg-indigo-500 rounded`}></View>
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
                      Balanced rations for cattle are made up of five basic types of feed. When combined in the right amounts, 
                      these feeds can supply all 
                      the nutrients needed to keep cattle healthy and productive. The five types of feed are:   
                      </Text>
                      
                      </View>
                    </View>   
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );

}


function SearchBar(){

    return (
        <Background>
            <Header>Feeding Search....</Header>
        </Background>
    );

}


// <div class="container px-5 py-24 mx-auto max-w-7x1">
// <div class="flex flex-wrap w-full mb-4 p-4">
//   <div class="w-full mb-6 lg:mb-0">
//     <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">News</h1>
//     <div class="h-1 w-20 bg-indigo-500 rounded"></div>
//   </div>
// </div>
// <div class="flex flex-wrap -m-4">
//   <div class="xl:w-1/3 md:w-1/2 p-4">
//     <div class="bg-white p-6 rounded-lg">
//       <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400">
//       <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//       <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
//       <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//     </div>
//   </div>
//   <div class="xl:w-1/3 md:w-1/2 p-4">
//     <div class="bg-white p-6 rounded-lg">
//       <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg" alt="Image Size 720x400">
//       <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//       <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
//       <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//     </div>
//   </div>
//   <div class="xl:w-1/3 md:w-1/2 p-4">
//     <div class="bg-white p-6 rounded-lg">
//       <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574" alt="Image Size 720x400">
//       <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//       <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
//       <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//     </div>
//   </div>
//   <div class="xl:w-1/3 md:w-1/2 p-4">
//     <div class="bg-white p-6 rounded-lg">
//       <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg" alt="Image Size 720x400">
//       <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//       <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
//       <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//     </div>
//   </div>
// </div>
// </div>
// </section>
