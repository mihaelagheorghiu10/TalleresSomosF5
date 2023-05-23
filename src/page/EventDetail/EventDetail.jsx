import React from 'react'
import style from './eventDetail.module.css'
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function EventDetail() {
  return (
    <div>
      <Navbar />
      <div className={style.eventDetailPage}>
        <div className={style.talleres1Conteiner}>
          <div>TallerCards</div>
          <div>TallerCards</div>
        </div>
        <div className={style.talleres2Conteiner}>
          <div>TallerCards</div>
          <div>TallerCards</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EventDetail
