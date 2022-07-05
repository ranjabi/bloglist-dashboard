import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const addComment = async (newObject) => {
  // content and blog
  console.log('4', newObject)
  const response = await axios.post(`${baseUrl}/${newObject.blog}/comments`, newObject)
  console.log(response.data)
  return response.data
}

const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject)
  return request.data
}

export default { getAll, create, update, remove, setToken, addComment }
