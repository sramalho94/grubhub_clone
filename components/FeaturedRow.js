import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { getFeaturedById, urlFor } from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
  // on component load, get restaurants by feature Id and set state

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeaturedById(id)
      setRestaurants(data[0].restaurants)
    }
    fetchData()
  }, [id])

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-400 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
      >
        {/* Restaurant Cards */}
        {restaurants?.map(
          (restaurant) =>
            restaurant.image && (
              <RestaurantCard
                key={restaurant._id}
                id={restaurant._id}
                imgUrl={urlFor(restaurant.image).url()}
                address={restaurant.address}
                title={restaurant.name}
                dishes={restaurant.dishes}
                rating={restaurant.rating}
                short_description={restaurant.short_description}
                genre={restaurant.type?.name}
                long={restaurant.long}
                lat={restaurant.lat}
              />
            )
        )}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
