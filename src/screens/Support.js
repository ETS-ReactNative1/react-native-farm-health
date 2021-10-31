import React from 'react'
import { View, Text } from 'react-native'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import TextInput from '../components/TextInput'
import Header from '../components/Header'
import Button from '../components/Button'
import { theme } from '../core/theme'
import TextArea from '../components/TextArea'
export default function Support({ navigation }) {
    return (
        <Background>
                <BackButton goBack={navigation.goBack} />
                <Header>Support & Help</Header>
                <TextInput
                label="Email"
                returnKeyType="next"
                autoCapitalize="none"
            />
            <TextInput
                label="Phone Number"
                returnKeyType="done"
                secureTextEntry
            />

                <TextArea
                label="Message"
                returnKeyType="done"
                secureTextEntry
            />
            <Button mode="contained">
                Submit
            </Button>
        </Background>
    )
}


