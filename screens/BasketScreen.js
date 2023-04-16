import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import React, { Component, useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()

  // ensuring that call only happens when items change
  const groupedItemsInBasket = useMemo(() => {
    return items.reduce((results, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})
  }, [items])

  console.log(groupedItemsInBasket)

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100 ">
        <View className="p-5 border-bottom-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key}>
              <Text>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">{`$${items[0].price}`}</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
