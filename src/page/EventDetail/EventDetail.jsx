import React from 'react'
import style from './eventDetail.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'

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
