'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Participant.belongsToMany(models.Event, {
        through : models.ParticipantEvent,
        foreignKey : "ParticipantId",
        otherKey : "EventId"
      })
    }
  };
  Participant.init({
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Participant',
  });
  return Participant;
};