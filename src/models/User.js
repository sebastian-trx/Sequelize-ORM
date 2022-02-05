const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      name: {
        type: DataTypes.STRING,
      },

      surname: {
        type: DataTypes.STRING,
      },

      mail: {
        type: DataTypes.STRING,
        unique: true
      },
    },
    { timestamps: true, paranoid: true }
  );
};
