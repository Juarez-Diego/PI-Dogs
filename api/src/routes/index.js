const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const allDogs = require('./dogs')
const dogDetail = require('./dogId')
const createDog = require('./createDog')
const allTemperaments = require('./temperaments')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", allDogs)
router.use("/dogs/", dogDetail)
router.use("/dog", createDog)
router.use("/temperaments", allTemperaments)



module.exports = router;
