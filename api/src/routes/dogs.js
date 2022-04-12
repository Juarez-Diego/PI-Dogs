require('dotenv').config();
const { Router } = require('express');
const axios = require("axios");
const { Dog, Temperament } = require("../db");

const router = Router()


/////////////////////////////////////////// GET DOGS FROM API /////////////////////////////////////////////////
const apiDogs = async function(){
    let array = [];
    const apiData = await axios.get("https://api.thedogapi.com/v1/breeds")

    array = array.concat(apiData.data)
    const final = array.map(e => {
        return{
            id: e.id,
            name: e.name,
            weight: e.weight.metric,
            temperament: e.temperament,
            image: e.image.url
        }
    })

    return final;
}



/////////////////////////////////////////// GET DOGS FROM DATABASE ////////////////////////////////////////////
const dbDogs = async function(){
    const dbAll = await Dog?.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
   const totalDb = await dbAll?.map(e => {
        return {
            id: e.id,
            name: e.name,
            weight: e.weight,
            temperament: e.Temperaments?.map(v => v.name).join(", "),
            image: e.image,
            createdInDb: e.createdInDb
        }
    });
  
    return totalDb;
}



/////////////////////////////////////////// JOIN VIDEOGAMES FROM API AND DATABASE //////////////////////////////////////
const allDogs = async function(){
    const api = await apiDogs();
    const db = await dbDogs()
    const all = api.concat(db)
    
    return all;
}


router.get("/", async (req, res) => {
    
    const {name} = req.query

    if (name) {
        const finalFunction = await allDogs();
        let dogName = finalFunction?.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        dogName.length ? res.status(200).json(dogName) : res.json("Dog not found, please try another search");
    
      } else {
        const finalFunction = await allDogs();
        res.status(200).json(finalFunction);
      }

})

module.exports = router;