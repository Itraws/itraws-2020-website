import GhostContentApi from '@tryghost/content-api'

const api = new GhostContentApi({
  url: 'https://ghost.itraws.com',
  key: 'fb222a38a47916a510a0f6c92f',
  version: 'v5.8'
})
export const getPosts = async (currentPage = 1) => {
  return await api.posts.browse({
    limit: 6,
    page: currentPage,
    include: ['authors', 'tags']
  })
}

export const getAllPosts = async () => {
  return await api.posts.browse()
}

export const getFeaturedPost = async () => {
  return await api.posts.browse({
    filter: 'featured:true'
  })
}

export const getSinglePost = async (postSlug) => {
  return await api.posts.read({
    slug: postSlug,
    include: 'authors'
  })
}

export const getLatestPosts = async (n) => {
  return await api.posts.browse({
    limit: n,
    include: 'tags',
    order: 'published_at DESC'
  })
}
