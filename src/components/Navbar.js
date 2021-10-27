import React from 'react'
import {FlatList, Text, TouchableOpacity,SafeAreaView, View,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import {Icon } from "react-native-elements"
import { useNavigation } from '@react-navigation/native';
const data =[
    {
        id: 1,
        title: "Poultry",
        image: "https://www.wattagnet.com/ext/resources/2021/08/31/broilers-house.jpg",
        screen: "Poultry",
    },{
        id: 2,
        title:"Cattle",
        image: "https://www.aces.edu/wp-content/uploads/2019/12/GettyImages-937057284.jpg",
        screen: "Cattle",
    },
    
]

const dataq = [
    {
        id: 3,
        title:"Goats",
        image: "https://modernfarmer.com/wp-content/uploads/2021/03/shutterstock_794370853.jpg",
        screen: "Goats",
    },
    {
        id: 4,
        title:"Help & Support",
        image: "https://www.thebangoraye.com/wp-content/uploads/2020/03/help-support.jpg",
        screen: "Support",
    }
]
export default function Navbar() {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
        <FlatList
        data={data}
        keyExtractor={(item)=> item.id}
        horizontal
        renderItem={({item})=>(
            <TouchableOpacity 
            // onPress={() => {
            //     navigation.goBack();
            //   }}
         
            onPress={() => {
                navigation.navigate(item.screen); 
              }}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                
                <View>
                    <Image 
                    style={{width:120,height:120,resizeMode:"contain"}} 
                    source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                     <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color="white" type="antdesign"/>
                </View>
            </TouchableOpacity>
        )}
        
        />
        <ListView/>
        </SafeAreaView>
       
    )
}

function ListView(){
    const navigation = useNavigation();
    return(
        <FlatList
        data={dataq}
        keyExtractor={(item)=> item.id}
        horizontal
        renderItem={({item})=>(
            <TouchableOpacity 
            // onPress={() => {
            //     navigation.goBack();
            //   }}
         
            onPress={() => {
                navigation.navigate(item.screen); 
              }}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                
                <View>
                    <Image 
                    style={{width:120,height:120,resizeMode:"contain"}} 
                    source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                     <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color="white" type="antdesign"/>
                </View>
            </TouchableOpacity>
        )}
        
        />
    );
}
