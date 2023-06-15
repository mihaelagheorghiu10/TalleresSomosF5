import React, { useEffect, useState } from 'react'
import { getInscriptionT } from '../../services/talleres.services'
import style from './register.module.css'


export default function Register() {

    const [DataRegister, setDataRegister] = useState([])

  const getAllInscriptionT = async () => {
    const { data } = await getInscriptionT()
    setDataRegister(data)
    console.log(data, 'json')
  }
  useEffect(() => {
    getAllInscriptionT()
  }, [])
  return (
    <div className={style.container}> 
        {DataRegister && DataRegister.map(item=> {
            return <div className={style.item}><h2>{item.nombre}</h2>
            <p>{item?.whatsapp}</p>
            <p>{item?.genero}</p>
            <p>{item?.email}</p>
            <p>{item?.ubicacion}</p>
            <p>{item?.nacionalidad}</p>
            <p>{item?.aceptaPrivacidad}</p>
            <p>{item?.comoNosConocio}</p>
            </div>
        })}
        
    </div>
  )
}

