/* import React from 'react'
import style from './eventDetail.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TalleresCards from "../../components/talleresCards/TalleresCards";
import DataTalleres from "../../utilities/DataTalleres.json";
import beginnerLevel from '../../assets/images/beginnerLevel.png'
import { useParams } from 'react-router-dom'

export default function EventDetail() {
  const { level } = useParams()
  const Data = DataTalleres.data[level].EventDetail
  console.log(Data)

  return <div>
    <Navbar/>
    <div className={style.HomePageContainer}>
    <div className={style.eventCardsHomePage}>
      {Data.map(taller=>{
        return <TalleresCards DataTaller={taller}>
      </TalleresCards>

      })}
  </div>

  <div className={style.text2HomePage}>

  </div>

</div>
      <Footer />
</div >
  
  }


// export default EventDetail
 */