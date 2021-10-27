import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Background from '../components/Background'
import BackButton from '../components/BackButton'



export default function Goats ({ navigation }) {


    return (
        <Background>
        <BackButton goBack={navigation.goBack} />
        <Text>Goats</Text>
    </Background>
    )
}
