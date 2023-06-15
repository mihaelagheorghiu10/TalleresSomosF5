import axios from 'axios'

export const getTalleres = () => {
  return axios.get('https://6475cfc3e607ba4797dca746.mockapi.io/api/Talleres')
}

export const getInscriptionT = () => {
  return axios.get(
    'https://64843740ee799e3216266317.mockapi.io/api/InscriptionT',
  )
}

export const postInscriptionT = (FormData)=> {
  return axios.post('https://64843740ee799e3216266317.mockapi.io/api/InscriptionT',FormData)
}
export const creatTaller = (formData) => {
  return axios.put(
    'https://6475cfc3e607ba4797dca746.mockapi.io/api/Talleres/1',
    formData,
  )
}

/* const createUser = async (userData) => {
  try {
    const response = await axios.post(
      'https://648041e5f061e6ec4d48e9f6.mockapi.io/api/users',
      userData,
    )
    console.log(response.data) // Puedes manejar la respuesta de la API como desees
  } catch (error) {
    console.error(error)
  }
}

// Llamar a la función para crear un usuario
const userData = {
  nombre: '',
  email: '',
  contraseña: '',
}

export const postInscriptionT = (FormData)=> {
  return axios.post('https://64843740ee799e3216266317.mockapi.io/api/InscriptionT',FormData)
}

createUser(userData) */
