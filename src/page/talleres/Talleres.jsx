import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TalleresCards from "../../components/talleresCards/TalleresCards";
import style from "../HomePage/homePage.module.css"
import DataTalleres from "../../utilities/DataTalleres.json";
import { useParams } from "react-router-dom";

export default function Talleres() {
    const
        { level } = useParams()
    const Data = DataTalleres.data[level].talleres
    console.log(Data)

    return <div>
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
                {Data.map(taller => {
                    return <TalleresCards DataTaller={taller} >
                    </TalleresCards>
                })}

            </div>
            <div className={style.text2HomePage}>

            </div>
        </div>
        <Footer />
    </div>

}
