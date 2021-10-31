import React, { Component } from 'react'
import { Text,StyleSheet,SafeAreaView, View,Image ,FlatList,TouchableWithoutFeedback,TouchableOpacity} from 'react-native'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native';
import { Transition, Transitioning } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import Logo from '../components/Logo'
const data = [

    {
   id: 1,
    name: 'Cholera',
    bg: '#3E7C17',
    color: '#F5F5EB',
    subCategories: [
       
        'Cause: Filterable virus',
        'Symptoms:  Loss of appetite, high fever,reddish-purplish patchwork of coloration on the affected stomach, breathing difficulty&a wobbly gait.',
        'Prevention: A preventive vaccine is Available. No effective Treatment. Producers should use good management'
    
    ]
   
     
     },
      {
      id: 2,
      name: 'PNEUMONIA',
      bg: '#406343',
     color: '#F5F5EB',
     subCategories: [
      'Cause: Bacteria, fungi, or dust,' ,
      'Symptoms: A general dullness, failing appetite, fever & difficulty breathing.',
     ' Prevention: Proper housing, ventilation,sanitation, and antibiotics.' 
     ]    
      },
      {
     id: 3,
      name: 'TETANUS',
      bg: '#5B6D5B',
      color: '#F5F5EB',
      subCategories: [
      'Cause: Spore-forming anaerobe bacterium ',
     ' Symptoms: Difficulty swallowing, stiff muscles, & muscle spasms.',
     ' Prevention: Immunizing animals with a tetanus toxoid.'
    ]


                  
      }
  ,
      {
      id: 4,
      name: 'ATROPHIC RHINITIS',
      bg: '#798777',
      color: '#F5F5EB',
      subCategories: [
      'Cause: Bordetella bronchiospetica & Pasturella,',
     ' Symptoms: Affects the nose, making it crooked and wrinkled.Sneezing, nose bleeds, and a tear-stained face occur.',
     ' Prevention: Sanitation and a good health program are important for prevention.Vaccines are available.'
    ]
                      
       },
       {
        id: 5,
        name: 'ANTHRAX',
        bg: '#086E4B',
        color: '#F5F5EB',
        subCategories: [
        'Cause: Spore-forming bacterium ',
        'Symptoms: Fever, swelling in the lower body region, a bloody discharge, staggering,trembling, difficult breathing,& convulsive movements.',
        'Prevention: An annual vaccination. Manure & contaminated materials should be burned & area disinfected. Insects should be controlled.'
        ]             
        },
         {
    id: 6,
    name: 'BLACKLEG',
    bg: '#61B15A',
    color: '#F5F5EB',
    subCategories: [
    'Cause: spore-forming bacterium',
    ' Symptoms: Lameness, followed by depression & fever.. The muscles in the hip, shoulder, chest, back, & neck swell.',
   ' Prevention: A preventative vaccine.']
                            
         },
         {
     id: 7,
     name: 'BRUCELLOSIS',
     bg: '#ADCE74',
     color: '#F5F5EB',
    subCategories: [
     'Cause: bacteria. Brucella abortus is the bacterium',
      'Symptoms: The abortion of the immature fetus is the only sign in some animals.',
     ' Prevention: Vaccinating calves with Brabortus prevent cattle from contacting the disease. Infected cattle must be slaughtered.'
    ]                  
        }
        ,
        {
    id: 8,
    name: 'ERYSIPELAS',
    bg: '#81B214',
    color: '#F5F5EB',
    subCategories: [
    'Cause: resistant bacterium',
   ' Symptoms: Three forms: acute,subacute, & diamond skin form. Acute: constipation, diarrhea, & reddish patches on the skin. Subacute: usually localized in an organ such as heart, bladder, or joints. Sloughing off of the skin is common.',
    'Prevention: An anti-swine erysipelasserum is available.'
    ]                     
        },
        {
    id: 9,
    name: 'LEPTOSPIROSIS',
    bg: '#62760C',
    color: '#F5F5EB',
    subCategories: [
    'Cause: acterium found in the blood, urine & milk of infected animals',
    'Symptoms: Causes abortion & sterility.Symptoms are blood-tinged milk & urine.',
   ' Prevention: Susceptible animals should be vaccinated.'
    ]                     
        },
        {
      id: 10,
      name: 'TUBERCULOSIS',
      bg: '#535204',
      color: '#F5F5EB',
      subCategories: [
      'Cause: tubercle bacilli',
      'Symptoms: Lungs are affected. However, other organs may be affected. Some animals  show no symptoms; others appear unthrifty & have a cough.',
      'Prevention: Maintaining a sanitary environment & comfortable quarters help prevent the disease.'
      ]                  
        },
        {
     id: 11,
     name: 'FOOT ROT',
     bg: '#406343',
     color: '#F5F5EB',
    subCategories: [
     'Cause: fungus ',
     'Symptoms: Skin near the hoof-line is red,swollen, & often has small lesions.',
     'Prevention: Maintaining clean, welldrained lots is an easy method of preventing footrot.'
    ]                   
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

   const  _onPress = (item,index) => {
        console.log('selected item:',item,'at index',index)
     };

     const transition = (
        <Transition.Together>
          <Transition.In type='fade' durationMs={200} />
          <Transition.Change />
          <Transition.Out type='fade' durationMs={200} />
        </Transition.Together>
      );

export default class Cattle extends Component {
    
  
    render() {
    return (
            
       <CattleList/>
            
        )

            }

    
    
}


 function CattleList({ navigation }) {
    const [currentIndex, setCurrentIndex] = React.useState(null);
    const ref = React.useRef();
  const bgColor = '#123320'
    return (
       
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}
      >
        <StatusBar hidden />
        {data.map(({bg, color, name, subCategories }, index) => {
          return (
            <TouchableOpacity
              key={name}
              onPress={() => {
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }}
              style={styles.cardContainer}
              activeOpacity={0.9}
            >
              <View style={[styles.card, { backgroundColor: bg }]}>
                <Text style={[styles.heading, { color }]}>{name}</Text>
                {index === currentIndex && (
                  <View style={styles.subCategoriesList}>
                    {subCategories.map((subCategory) => (
                      <Text key={subCategory} style={[styles.body, { color }]}>
                        {subCategory}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </Transitioning.View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    cardContainer: {
      flexGrow: 1,
    },
    card: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 21,
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: -2,
    },
    body: {
      fontSize: 20,
      lineHeight: 20 * 1.5,
      textAlign: 'center',
    },
    subCategoriesList: {
      marginTop: 20,
    },
  });
  


