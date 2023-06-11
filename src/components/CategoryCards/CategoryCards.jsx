import React from "react";
//import styles from "./categoryCards.module.css";
import beginnerLevel from "../../assets/images/beginnerLevel.png";



//function CategoryCards (props) {
//return (
//<div className="cardCategory">
//<img src={props.image} alt={props.title} />
//<h2>{props.title}</h2>
//<p>{props.description}</p>
//<button>Talleres</button>
//</div>
//)
//} 

function CategoryCards(props) {
    const cardStyle = {
        padding: '1rem',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '200px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        verticalAlign: 'top',
        backgroundColor: '#FED2C0',
        gap: '1rem',


    };

    const imgStyle = {
        width: '100%'
    };

    const h2Style = {
        fontSize: '24px',
        margin: '10px 0 10px'
    };

    const pStyle = {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '20px'
       
    };

    const buttonStyle = {
        display: 'inline-block',
        fontSize: '14px',
        color: '#fff',
        backgroundColor: '#007bff',
        padding: '8px 16px',
        borderRadius: '2px',
        textDecoration: 'none',
        borderRadius: '10px'
        
    };

    const buttonHoverStyle = {
        backgroundColor: '#0069d9'

    };

    const squareStyle = {


        backgroundColor: '#004540',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        textAlign: 'left',
        borderRadius: '0 2rem 0 2rem',
        color: 'white',
        height: '100%',
        justifyContent: 'space-between',
    };

    return (
        <div className="cardCategory" style={cardStyle}>

            <div><img src={props.beginnerLevel} alt={props.title} style={imgStyle} /></div>
            <div style={squareStyle}>
                <h2 style={h2Style}>{props.title}</h2>
                <p style={pStyle}>{props.description}</p>
                <button style={buttonStyle} >
                    Talleres
                </button>
            </div> 
        </div>
    );
}

export default CategoryCards;