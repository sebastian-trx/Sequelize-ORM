const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const user = require("./userRouting.js");
const address = require("./addressRouting.js");
const post = require("./postRouting.js");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user", user);
router.use("/address", address);
router.use("/post", post);


module.exports = router;
