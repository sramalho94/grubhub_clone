import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { getCategories, urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let data = await getCategories()
      setCategories(data)
    }
    fetchData()
  }, [])

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Category Cards */}
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  )
}

export default Categories
