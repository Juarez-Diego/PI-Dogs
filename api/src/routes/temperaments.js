require('dotenv').config();
const { Router } = require('express');
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const e = require('express');

const router = Router()


const apiTemperaments = async function(){
    let array = [];
    const apiData = await axios.get("https://api.thedogapi.com/v1/breeds")

    array = array.concat(apiData.data)

    let temp = array.map(e => {
        return e.temperament
    })

    let newArray = []
    for(var i = 0; i < temp.length; i++){
       if(temp[i] !== undefined){
           newArray = newArray.concat(temp[i].split(", "))
       }
    }
     
    let final = [...new Set(newArray)];
    
    return final.sort()
    
}



router.get("/", async (req, res) => {

    const alltemps = await apiTemperaments()

    alltemps.forEach(e => {
        Temperament.findOrCreate({
            where: {
              name: e,
            },
          });
    })
  
    const all = await Temperament.findAll();

    res.status(200).json(all);
})


module.exports = router;