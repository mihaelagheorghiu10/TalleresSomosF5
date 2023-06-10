import axios from 'axios'

export const getTalleres = () => {
  return axios.get('https://648041e5f061e6ec4d48e9f6.mockapi.io/api/Talleres')

}

export const getInscriptionT = ()=> {
  return axios.get('https://64843740ee799e3216266317.mockapi.io/api/InscriptionT')
}
