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

async function putPost(req, res) {
  const { title, body } = req.body;

  try {
    const updatePost = {
      title,
      body
    };

    const postById = await Post.findByPk(id);

    postById
      ? res.send(await postById.update(updatePost))
      : res.send("No se ha podido actualizar el usuario");
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(req, res) {
  const { id } = req.query;

  try {
    const deletePost = await Post.findByPk(id);

    deletePost
      ? res.send(await deletePost.destroy())
      : res.json("No se ha podido eliminar el usuario");
  } catch (error) {
    console.log(error);
  }
}

const postInfo = async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const dbPost = await Post.findByPk(id);
      dbPost
        ? res.send({
            post: dbPost,
          })
        : res.send(`No se ha encontrado el post con el id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const allPost = await Post.findAll({
        // mostrar atributos especificos de la relación
        include:{
            model:User,
            attributes:['name', "surname"]
        },
        // attributos que quero mostrar
        attributes:['id','title', 'body']
    })
        res.send(allPost)
  } catch (error) {
    console.log(error)  
  }
};

module.exports = {
  postPost,
  putPost,
  deletePost,
  postInfo,
};
