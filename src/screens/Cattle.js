import React, { Component } from 'react'
import { Text, View,Image ,FlatList} from 'react-native'
import Background from '../components/Background'
import BackButton from '../components/BackButton'

export default function Cattle({ navigation }) {
    

const data = [

    {
   id: 1,
    name: 'Cholera',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
    Cause:'filterable virus',
    Symptoms:'  Loss of appetite, high fever,reddish-purplish patchwork of coloration on the affected stomach, breathing difficulty&a wobbly gait.',
    Prevention:'A preventive vaccine is Available. No effective Treatment. Producers should use good management'

     
     },
      {
      id: 2,
      name: 'PNEUMONIA',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
      Cause:'Bacteria, fungi, or dust,' ,
      Symptoms:'A general dullness, failing appetite, fever & difficulty breathing.',
      Prevention:'Proper housing, ventilation,sanitation, and antibiotics.'     
      },
      {
     id: 3,
      name: 'TETANUS',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
      Cause:'spore-forming anaerobe bacterium ',
      Symptoms:'Difficulty swallowing, stiff muscles, & muscle spasms.',
      Prevention:'Immunizing animals with a tetanus toxoid.'


                  
      }
  ,
      {
      id: 4,
      name: 'ATROPHIC RHINITIS',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
      Cause:'Bordetella bronchiospetica & Pasturella,',
      Symptoms:'Affects the nose, making it crooked and wrinkled.Sneezing, nose bleeds, and a tear-stained face occur.',
      Prevention:'Sanitation and a good health program are important for prevention.Vaccines are available.'
                      
       },
       {
        id: 5,
        name: 'ANTHRAX',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
        Cause:'spore-forming bacterium ',
        Symptoms:'Fever, swelling in the lower body region, a bloody discharge, staggering,trembling, difficult breathing,& convulsive movements.',
        Prevention:'An annual vaccination. Manure & contaminated materials should be burned & area disinfected. Insects should be controlled.'
                        
        },
         {
    id: 6,
    name: 'BLACKLEG',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
    Cause:'spore-forming bacterium',
    Symptoms:'Lameness, followed by depression & fever.. The muscles in the hip, shoulder, chest, back, & neck swell.',
    Prevention:'A preventative vaccine.'
                            
         },
         {
     id: 7,
     name: 'BRUCELLOSIS',
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
     Cause:'bacteria. Brucella abortus is the bacterium',
      Symptoms:'The abortion of the immature fetus is the only sign in some animals.',
      Prevention:'Vaccinating calves with Brabortus prevent cattle from contacting the disease. Infected cattle must be slaughtered.'
                            
        }
        ,
        {
    id: 8,
    name: 'ERYSIPELAS',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
    Cause:'resistant bacterium',
    Symptoms:'Three forms: acute,subacute, & diamond skin form. Acute: constipation, diarrhea, & reddish patches on the skin. Subacute: usually localized in an organ such as heart, bladder, or joints. Sloughing off of the skin is common.',
    Prevention:'An anti-swine erysipelasserum is available.'
                            
        },
        {
    id: 9,
    name: 'LEPTOSPIROSIS',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
    Cause:'acterium found in the blood, urine & milk of infected animals',
    Symptoms:'Causes abortion & sterility.Symptoms are blood-tinged milk & urine.',
    Prevention:'Susceptible animals should be vaccinated.'
                            
        },
        {
      id: 10,
      name: 'TUBERCULOSIS',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
      Cause:'tubercle bacilli',
      Symptoms:'Lungs are affected. However, other organs may be affected. Some animals  show no symptoms; others appear unthrifty & have a cough.',
      Prevention:'Maintaining a sanitary environment & comfortable quarters help prevent the disease.'
                            
        },
        {
     id: 11,
     name: 'FOOT ROT',
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
     Cause:'fungus ',
     Symptoms:'Skin near the hoof-line is red,swollen, & often has small lesions.',
     Prevention:'Maintaining clean, welldrained lots is an easy method of preventing footrot.'
                            
        },
    //     {
    //  id: 12,
    //  name: 'CALF DIPHTHERIA',
    //  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhqjM1uUVvJr2VS-Bz52ETtqUnj-EbGbpA&usqp=CAU',
    //  Cause:'',
    //  Symptoms:'',
    //  Prevention:''
                            
    //     }
  
      ]
      const SPACING =20
      const AVATAR_SIZE= 70
      const imageBck = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3AL07_lZlUrwzkK4lztTvZ079waoEkjaDA&usqp=CAU'
    return (
            <Background style={{flex:1}}>
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
                            <Text style={{fontSize:22,opacity:.8}}>{item.Cause}</Text>
                        </View>
                    </view>
                }}
              />
            </Background>
        )
    
}
