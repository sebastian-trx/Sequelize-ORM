const { User, Address, Post } = require("../db.js");
const { Op } = require("sequelize");
const address = require("../models/address.js");

async function postPost(req, res) {
  const { title, body, userId} = req.body;

  // const check = await User.findOne({
  //   where: {
  //     mail: mail,
  //   },
  // });

  // if (check) res.json("Usuario ya existente en la base de datos");
  // else {
    const post = {
      title,
      body,
      userId
    };

    try {
      const newPost = await Post.create(post);
      if (newPost) res.json({ type: "success", data: post });
      else {
        res.json({ type: "failure", data: "Error en creación de usuario" });
      }
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
// }

// async function putUser(req, res) {
//   const { id, name, surname, mail } = req.body;

//   try {
//     const updateUser = {
//       name,
//       surname,
//       mail,
//     };

//     const userById = await User.findByPk(id);
//     // probar con mail

//     userById
//       ? res.send(await userById.update(updateUser))
//       : res.send("No se ha podido actualizar el usuario");
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function deleteUser(req, res) {
//   const { id } = req.query;

//   try {
//     const deleteUser = await User.findByPk(id);

//     deleteUser
//       ? res.send(await deleteUser.destroy())
//       : res.json("No se ha podido eliminar el usuario");
//   } catch (error) {
//     console.log(error);
//   }
// }

// const userInfo = async (req, res) => {
//   const { id } = req.query;

//   if (id) {
//     try {
//       const dbUser = await User.findByPk(id);
//       dbUser
//         ? res.send({
//             user: dbUser,
//           })
//         : res.send(`No se ha encontrado el usuario con el id: ${id}`);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   try {
//     const allUsers = await User.findAll({
//         //* include: 'address',
//         // mostrar atributos especificos de la relación
//         include:{
//             model:Address,
//             attributes:['street']
//         },
//         // attributos que quero mostrar
//         attributes:['id','name', 'surname']
//     })
//         res.send(allUsers)
//   } catch (error) {
//     console.log(error)  
//   }
// };

module.exports = {
  postPost,
  // putUser,
  // deleteUser,
  // userInfo,
};
