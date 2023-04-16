import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity'

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-x-gray-200">
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
  )
}

export default DishRow
