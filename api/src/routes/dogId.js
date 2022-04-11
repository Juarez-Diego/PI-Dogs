require("dotenv").config()
const { Router } = require('express');
const axios = require("axios");
const { Dog, Temperament } = require("../db");

const router = Router()


/////////////////////////////////////////// GET DOG FROM API /////////////////////////////////////////////////
const apiInfo = async function(id){
    let array = []
    const apiData = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)

    array.push(apiData.data)

    const final = array.map(e => {
        return{
            id: e.id,
            name: e.name,
            weight: e.weight.metric,
            height: e.height.metric,
            temperament: e.temperament,
            life_span: e.life_span,
            image: `https://cdn2.thedogapi.com/images/${e.reference_image_id}.jpg`
        }
    })

    return final;
}



/////////////////////////////////////////// GET DOG FROM DATABASE ////////////////////////////////////////////
const dbInfo = async function(id){

    const doggy = await Dog.findOne({
        where: {
            id,
        },
        include: {
            model: Temperament, 
            attributes: ['name'],
            through: {
                attributes:[]
            }
        }
    })

    let temp = [];
    temp.push(doggy)

    const result =  temp?.map(e => {
        return {
            id: e.id,
            name: e.name,
            weight: e.weight,
            height: e.height.metric,
            temperament: e.Temperaments?.map(v => v.name),
            life_span: e.life_span,
            image: e.image,
            createdInDb: e.createdInDb
        }
    })
    return result;
}


router.get("/:DogId", async (req, res) => {

    const { DogId } = req.params;
    console.log(DogId)
    try {
        if (DogId.includes("-")) { 
            const database = await dbInfo(DogId)
            return res.json(database);
        }
        const api = await apiInfo(DogId)
        res.json(api);

      } catch (err) {
        res.json("Dog ID not found");
      }

})



module.exports = router;