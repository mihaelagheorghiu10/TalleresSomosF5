import axios from 'axios'

export const getTalleres = () => {
  return axios.get('https://648041e5f061e6ec4d48e9f6.mockapi.io/api/Talleres')
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

createUser(userData)
 */
