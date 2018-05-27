import apiMusicService from './api-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return apiMusicService.get('/search', {
    params: {q, type}
  })
    .then(response => response.data)
}

export default trackService
