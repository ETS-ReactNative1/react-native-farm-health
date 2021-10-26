import React, { Component } from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';

import NavBar from './../components/Navbar'
export default class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
               <Image 
               style={{
                width:100, 
                height:100,
                resizeMode: "contain",
            
            }}
               source={{
                uri:"https://www.nedap-livestockmanagement.com/wp-content/uploads/2016/09/121008-KoePositiebepaling-68-800x534.jpg",
               }  
               }
               />
               <NavBar/>
           </View>



        </SafeAreaView>
      
    )
  }
}
