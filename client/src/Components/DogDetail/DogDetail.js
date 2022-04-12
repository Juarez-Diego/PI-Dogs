import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../Actions";

import Loading from "../Loading/Loading";


function DogDetail(){

let defaultImage = "https://ep01.epimg.net/verne/imagenes/2017/05/23/mexico/1495504993_964103_1495564462_noticia_normal.jpg"
const dispatch = useDispatch();
const detailedDoggo = useSelector(state => state.dogDetail);

const {DogId} = useParams();


useEffect(() => {
    dispatch(getDogById(DogId))
}, [dispatch, DogId])

    return(
        <div>
            {!Array.isArray(detailedDoggo) ? (<div className="name-not-found"><h1>Videogame not found, please try another search</h1></div>) :

            detailedDoggo.length > 0 ? 

        <div>

        <div>
        <img src={detailedDoggo[0].image} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} alt="img" width="600px" height="350px" ></img>

        <div>
        <div>
        <h1>{detailedDoggo[0].name}</h1>
        </div>

        <div>
        <h2>Temperament: {detailedDoggo[0].temperament}</h2>
        </div>
        </div>

        </div>

        <div>
        <h2>Weight: {detailedDoggo[0].weight} kgs.</h2>
        </div>

        <div>
        <h3>Height: {detailedDoggo[0].height} cm.</h3>
        </div>

        <div>
        <h3>Life Span: {detailedDoggo[0].life_span}</h3>
        </div>
            
    </div> :  (<Loading />) 
  }
        </div>
    )
}

export default DogDetail;