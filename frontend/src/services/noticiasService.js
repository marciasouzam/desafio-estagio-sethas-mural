import axios from 'axios' // 

const api = axios.create({
  baseURL: '/corpnews_api/noticias',
})

export const getNoticias = () =>
  api.get('/')

export const getNoticia = (id) =>
  api.get(`/${id}/`)

export const criarNoticia = (formData) =>
  api.post('/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

export const deletarNoticia = (id) =>
  api.delete(`/${id}/`)
