import GhostContentApi from '@tryghost/content-api'

const api = new GhostContentApi({
  url: 'http://192.168.2.73:3001',
  key: 'ca5e6173cdb4e550841d4ca417',
  version: 'v3'
})

export const getPosts = async (currentPage: number = 1) => {
  return await api.posts.browse({
    limit: 6,
    page: currentPage,
    include: ['authors', 'tags']
  })
}

export const getFeaturedPost = async () => {
  return await api.posts.browse({
    filter: 'featured:true'
  })
}

export const getSinglePost = async (postSlug: string) => {
  return await api.posts.read({
    slug: postSlug,
    include: 'authors'
  })
}

export const getLatestPosts = async (n: string) => {
  return await api.posts.browse({
    limit: n,
    include: 'tags',
    order: 'published_at DESC'
  })
}
