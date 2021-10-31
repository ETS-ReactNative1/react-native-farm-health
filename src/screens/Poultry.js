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
    name: 'CORYZA (COLDS))',
    bg: '#3E7C17',
    color: '#F5F5EB',
    subCategories: [
        'Symptoms: The first symptom noticed by the poultryman is that bits of straw and feathers stick to the beak and nostrils.',
        'Currently, there are no vaccines available '
    
    ]
   
     
     },
      {
      id: 2,
      name: 'CATARRH (NASAL ROUP) ',
      bg: '#406343',
     color: '#F5F5EB',
     subCategories: [
      'Cause: bacterium Clostridium perfringens' ,
      'Symptoms: Listless, reduced to no appetite, acute diarrhea (more common in goats), dysentery, and abdominal pain.',
     ' Prevention: Vaccinate pregnant dams during their last trimester with a clostridial vaccine (7- or 8-way) that includes C. perfringens types C and D protection.' 
     ]    
      },
      {
     id: 3,
      name: 'APOPLECTIFORM SEPTICEMIA',
      bg: '#5B6D5B',
      color: '#F5F5EB',
      subCategories: [
      'Cause: Coccidiosis is a protozoal parasite disease that primarily affects young and newborn animals. ',
     ' Symptoms: Diarrhea, bloody diarrhea. • Dehydration. ◦ To check for dehydration, tent the skin; the animal is dehydrated if skin is slow to retract. • Listless.',
     ' Prevention: Coccidiostat products. ◦ Drenches are most effective in applying appropriate dose. ◦ Products for feed or water are also available;'
    ]


                  
      }
  ,
      {
      id: 4,
      name: 'BACILLARY WHITE DIARRHEA',
      bg: '#798777',
      color: '#F5F5EB',
      subCategories: [
      'Cause: Pasteurella multocida ',
     ' Symptoms:  Poor appetite. • Nasal discharge and labored breathing. • Listless and depressed. • Temperature higher than 103.8°F.',
     ' Prevention: • Antibiotic therapy (consult your veterinarian for proper treatment). • Probiotics to help stimulate appetite. • Increase nutrient density of the diet.'
    ]
                      
       },
       {
        id: 5,
        name: 'TETANUS',
        bg: '#086E4B',
        color: '#F5F5EB',
        subCategories: [
        'Cause: Clostridium tetani. ',
        'Symptoms: In ruminants, chronic bloating may be an indication of the onset of tetanus.',
        'Prevention: Heavy doses of low-grade, fast-acting antibiotics may be helpful'
        ]             
        }
        ,
        {
          id: 5,
          name: 'CHLAMYDIA',
          bg: '#406343',
     color: '#F5F5EB',
          subCategories: [
          'Cause: Chlamydia bacteria, ',
          'Symptoms: Ewes and does infected with C. abortus will experience late-term abortions, stillbirths, and weak lambs and kids. ',
          'Prevention: Clinical signs of a disease do not always clearly define the cause. Therefore, it is recommended that affected animals be tested by a veterinarian before adequate'
          ]             
          }
      ]

      const transition = (
        <Transition.Together>
          <Transition.In type='fade' durationMs={200} />
          <Transition.Change />
          <Transition.Out type='fade' durationMs={200} />
        </Transition.Together>
      );

export default function Poultry ({ navigation }) {


    return (
       <CattleList/>
    
    )
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
  
