import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import TalleresCards from '../../components/talleresCards/TalleresCards'
import style from '../HomePage/homePage.module.css'
import { useParams } from 'react-router-dom'
import { getTalleres } from '../../services/talleres.services'

export default function Talleres() {
  const [DataTalleres, setDataTalleres] = useState([])
  const { level } = useParams()

  const getAllTalleres = async () => {
    const { data } = await getTalleres()
    setDataTalleres(data[0].nivelesDeTaller[level].talleres)
    console.log(data, 'json')
  }
  useEffect(() => {
    getAllTalleres()
  }, [])

  return (
    <div>
      <Navbar />
      <div className={style.HomePageConteiner}>
        {/* <div className={style.text1HomePage}>
                <h1 className={style.title1}>Aqui</h1>
                <h1 className={style.title2}>
                    empieza el viaje hacia tu talento digital
                </h1>
                <h1 className={style.title1}>#Rompemosloscodigos</h1>
            </div> */}
        <div className={style.eventCardsHomePage}>
          {DataTalleres &&
            DataTalleres.map((taller) => {
              return <TalleresCards DataTaller={taller}></TalleresCards>
            })}
        </div>
        <div className={style.text2HomePage}></div>
      </div>
      <Footer />
    </div>
  )
}
