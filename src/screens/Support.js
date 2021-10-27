import React from 'react'
import { View, Text } from 'react-native'
import Background from '../components/Background'
import BackButton from '../components/BackButton'

export default function Support({ navigation }) {
    return (
        <Background>
                <BackButton goBack={navigation.goBack} />
                <Text>Support</Text>
        </Background>
    )
}


