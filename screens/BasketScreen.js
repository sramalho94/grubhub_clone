import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import React, { Component, useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/outline'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const dispatch = useDispatch()

  // ensuring that call only happens when items change
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      ;(results[items.id] = results[items.id] || []).push(item)
      return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  console.log(groupedItemsInBasket)

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <View>
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack}>
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
