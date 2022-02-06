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
        allowNull: false
      },

      surname: {
        type: DataTypes.STRING,
        allowNull: false
      },

      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { args: true, msg: "ingrese un correo valido" },
        },
      },

      age:{
          type: DataTypes.INTEGER,
          allowNull: false,
        validate:{
            isEven(value){
                if(parseInt(value)%2 !==0){
                    throw new Error('solo pares permitidos')
                }
            }
        }
      }
    },
    { timestamps: false, paranoid: false }
  );
};
