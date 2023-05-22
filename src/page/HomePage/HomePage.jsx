import React from 'react'
import style from './homePage.module.css'
import Navbar from '../../components/navbar/Navbar'
import beginnerLevel from '../../assets/images/beginnerLevel.png'
import Footer from '../../components/Footer/Footer'
import CategoryCards from '../../components/CategoryCards/CategoryCards'

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={style.HomePageConteiner}>
        <div className={style.text1HomePage}>
          <h1 className={style.title1}>Aqui</h1>
          <h1 className={style.title2}>
            empieza el viaje hacia tu talento digital
          </h1>
          <h1 className={style.title1}>#Rompemosloscodigos</h1>
        </div>
        <div className={style.eventCardsHomePage}>
          <CategoryCards
            beginnerLevel={beginnerLevel}
            src="img"
            title="hola"
            description="somos f5"
          />
        </div>
        <div className={style.text2HomePage}></div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
