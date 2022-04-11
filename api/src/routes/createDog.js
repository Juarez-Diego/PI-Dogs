require("dotenv").config()
const { Router } = require('express');
const { Dog, Temperament } = require("../db");

const router = Router()



router.post("/", async (req, res) => {

    const {name, height, weight, life_span, image, temperament } = req.body

    const newDog = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
        temperament,
    })

    const searchTemperaments = await Temperament.findAll({
        where: {
            name: temperament
        }
    })

    newDog.setTemperaments(searchTemperaments)

    res.status(200).json(newDog)
})



module.exports = router;