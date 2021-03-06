const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "band",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      year: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false, paranoid: false }
  );
};
