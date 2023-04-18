"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      year: { type: DataTypes.STRING, allowNull: false },
      poster: { type: DataTypes.STRING, allowNull: false },
      raiting: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      watched: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "movie",
    }
  );
  return movie;
};
