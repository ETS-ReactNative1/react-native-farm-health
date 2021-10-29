import React, { Component } from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import NavBar from './../components/Navbar'
import BackButton from '../components/BackButton'
import { useNavigation } from '@react-navigation/native';
import Background from '../components/Background'

export default function Dashboard({navigation}){
  return(
    <Background>
     
    <Header> Leruo Health</Header>
    <NavBar/>
    </Background>
  )
}




// export default function Dashboard ({ navigation }) {

//    const navigation = useNavigation();
  
//     return (
//       <SafeAreaView style={tw`bg-white h-full`}>
//       <View style={tw`p-5`}>
//       {/* <BackButton goBack={navigation.goBack} />
//               <Paragraph> Leruo Home</Paragraph> */}
//                <NavBar/>
//            </View>



//         </SafeAreaView>
      
//     )
  
// }
