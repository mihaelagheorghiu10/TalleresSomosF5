import React from 'react'
import style from './homePage.module.css'
import Navbar from '../../components/navbar/Navbar'
import beginnerLevel from '../../assets/images/beginnerLevel.png'
import Footer from '../../components/Footer/Footer'
import CategoryCards from '../../components/CategoryCards/CategoryCards'
import DataTalleres from '../../utilities/DataTalleres.json'


function HomePage() {
  const Data = DataTalleres.data
  console.log(Data)
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
          {Data.map(item => {
            return <CategoryCards
              beginnerLevel={beginnerLevel}
              src="img"
              title= {item.title}
              description= {item.description} ></CategoryCards>
          })}

        </div>
        <div className={style.text2HomePage}>
          <h2 className={style.title3}>
            Conviértete en el talento digital de mañana.
          </h2>
          <p className={style.textA}>
            Disfruta programando con nuestra pedagogía práctica e innovadora. No
            necesitas titulación o conocimiento previo, sólo importa tu
            motivación, tu lógica, tu autonomía y tu capacidad de trabajar en
            equipo. Hoy más que nunca las empresas necesitan nuevo talento
            digital apuestan por su diversidad. El sector digital ofrece
            salarios competitivos, contratos estables y buenas perspectivas de
            desarrollo profesional.{' '}
          </p>
          <p className={style.textB}>
            ¡Atrévete a romper los códigos con el modelo F5!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
