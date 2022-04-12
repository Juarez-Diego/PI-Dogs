import React from "react";
import "../Card/Card.css"

export function Card({id, name, weight, temperament, image }){

let defaultImage = "https://ep01.epimg.net/verne/imagenes/2017/05/23/mexico/1495504993_964103_1495564462_noticia_normal.jpg"
    return(
            
        <div className="card-main">
            <img src={image} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} alt="img" width="120" height="120"></img>
                <div className="card-content">
                    <h2 className="card-name">{name}</h2>

                    <div className="card-genres">
                    <h3>Temperament: {temperament}</h3>
                    </div>

                    <div className="card-rating">
                    <h3>Weight: {weight} kgs.</h3>
                    </div>
                </div>
        </div>
 
    )
}

export default Card;