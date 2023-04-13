import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  // get navigation object from useNavigation hook
  const navigation = useNavigation()

  // on load, hide the header for the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    // screen is loaded within Safe Area View so it doesn't clip into uphone notch area
    <SafeAreaView>
      <Text className="text-red-500">Home Screen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
