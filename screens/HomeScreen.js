import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon
} from 'react-native-heroicons/outline'
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
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex-row pn-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View>
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen
