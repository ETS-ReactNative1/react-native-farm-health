import React, { Component } from 'react'
import { Text, View,Image ,FlatList} from 'react-native'
import Background from '../components/Background'
import BackButton from '../components/BackButton'

export default function Cattle({ navigation }) {
    

const data = [

    {
   id: 1,
    name: 'Cholera',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
  
     },
      {
      id: 2,
      name: 'PNEUMONIA',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
              
      },
      {
        id: 3,
      name: 'TETANUS',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                  
      }
  ,
      {
      id: 4,
      name: 'ATROPHIC RHINITIS',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                      
       },
       {
        id: 5,
        name: 'ANTHRAX',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                        
        },
         {
            id: 6,
            name: 'BLACKLEG',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                            
         },
         {
            id: 7,
            name: 'BRUCELLOSIS',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                            
        }
        ,
        {
            id: 8,
            name: 'ERYSIPELAS',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                            
        },
        {
            id: 9,
            name: 'LEPTOSPIROSIS',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                            
        },
        {
            id: 9,
            name: 'TUBERCULOSIS',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                            
        },
        {
            id: 9,
            name: 'FOOT ROT',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                            
        },
        {
            id: 9,
            name: 'CALF DIPHTHERIA',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU'
                            
        }
  
      ]
      const SPACING =20
      const AVATAR_SIZE= 70
      const imageBck = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3AL07_lZlUrwzkK4lztTvZ079waoEkjaDA&usqp=CAU'
    return (
            <Background>
                <BackButton goBack={navigation.goBack} />
                <Image
                source={{url:imageBck}}
                style={StyleSheet.absoluteFillObject}
                />
                <FlatList
                data={data}
                keyExtractor={item=> item.key}
                contentContainerStyle={{
                    padding: SPACING
                }}
                renderItem={({item,index})=>{
                    return<view style={{flexDirection:'row',padding:SPACING,marginBottom:SPACING,backgroundColor:'rgba(255,255,255,0.8)',borderRadius:12 }}>
                        <Image
                        source={{uri:item.image}}
                        style={{width:AVATAR_SIZE,heigh:AVATAR_SIZE,
                            borderRadius:AVATAR_SIZE,
                            marginRight:SPACING/2,
                            shadowColor:"#000",
                            shadowOffset:{
                                width:0,
                                height:10
                            },
                            shadowOpacity:.3,
                            shadowRadius:20
                        
                        }}
                        />
                        <View>
                            <Text style={{fontSize:22,opacity:.8}}>{item.name}</Text>
                        </View>
                    </view>
                }}
              />
            </Background>
        )
    
}
