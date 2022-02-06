const { Address } = require("../db.js");
const { Op } = require("sequelize");

async function postAddress(req, res) {
  const { street, userId } = req.body;

  const check = await Address.findOne({
    where: {
      userId: userId,
    },
  });

  if (check) res.json("la direccion ya fue asociada a un usuario existente");
  else {
    const address = {
      street,
      userId,
    };

    try {
      const newAddress = await Address.create(address);
      if (newAddress) res.json({ type: "success", data: address });
      else {
        res.json({ type: "failure", data: "Error en creación de usuario" });
      }
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}

async function putAddress(req, res) {
  const { street, userId, id } = req.body;

  try {
    const updateAddress = {
      street,
      userId,
    };

    const addressById = await Address.findByPk(id);

    addressById
      ? res.send(await addressById.update(updateAddress))
      : res.send("No se ha podido actualizar el usuario");
  } catch (error) {
    console.log(error);
  }
}

async function deleteAddress(req, res) {
  const { id } = req.query;

  try {
    const deleteAddress = await Address.findByPk(id);

    deleteAddress
      ? res.send(await deleteAddress.destroy())
      : res.json("No se ha podido eliminar el usuario");
  } catch (error) {
    console.log(error);
  }
}

const addressInfo = async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const dbAddress = await Address.findByPk(id);
      dbAddress
        ? res.send({
            address: dbAddress,
          })
        : res.send(`No se ha encontrado la dirección con el id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const allAddress = await Address.findAll({
      include: "user",
    });
    res.send(allAddress);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postAddress,
  putAddress,
  deleteAddress,
  addressInfo,
};
