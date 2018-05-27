import apiMusicService from './api-music'

const trackService = {}

trackService.search = (q) => {
  const type = 'track'
  return apiMusicService.get('/search', {
    params: {q, type}
  })
    .then(response => response.data)
}

trackService.getById = (id) => {
  return apiMusicService.get(`/tracks/${id}`)
    .then(response => response.data)
}

export default trackService
