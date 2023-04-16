import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'

import { MinusCircleIcon } from 'react-native-heroicons/solid'
import { PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToBasket,
  selectBasketItemsWithId,
  removeFromBasket
} from '../features/basketSlice'

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false)

  const items = useSelector((state) => selectBasketItemsWithId(id, state))

  const itemCount = items.length > 0 ? items[0].count : 0

  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }))
  }
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-x-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400">
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: image }}
              className="h-20 w-20 bg-gray-300 p-4"
              style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon
                color={items.length > 0 ? '#00CCBB' : 'gray'}
                size={40}
              />
            </TouchableOpacity>

            <Text>{itemCount}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
