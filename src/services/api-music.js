import trae from 'trae'
import configService from './config'

const apiMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default apiMusicService
