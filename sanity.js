import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '4yoy4kim',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-04-15'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => {
  builder.image(source)
}

export async function getFeatured() {
  const featured = await client.fetch(
    `*[_type == "featured"]{
  ...,
  restaurants[]->{
    ...,
    dishes[]->
  },
}`
  )
  return featured
}
