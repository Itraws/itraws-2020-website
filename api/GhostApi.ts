import GhostContentApi from '@tryghost/content-api'

const api = new GhostContentApi({
  url: 'http://192.168.2.73:3001',
  key: 'ca5e6173cdb4e550841d4ca417',
  version: 'v3'
})

export const getPosts = async () => {
  try {
    return await api.posts.browse({
      limit: 'all',
      include: 'authors,tags'
    })
  } catch (error) {
    console.error({ error })
  }
}

export const getFeaturedPost = async () => {
  try {
    return await api.posts.browse({
      filter: 'featured:true'
    })
  } catch (error) {
    console.error({ error })
  }
}

export const getSinglePost = async (postSlug: string) => {
  try {
    return await api.posts.read({
      slug: postSlug,
      include: 'authors'
    })
  } catch (error) {
    console.log(error)
  }
}

export const getLatestPosts = async (n: string) => {
  try {
    return await api.posts.browse({
      limit: n,
      include: 'tags',
      order: 'published_at DESC'
    })
  } catch (error) {
    console.error({ error })
  }
}
