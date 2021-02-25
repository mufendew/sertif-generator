'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsToMany(models.Participant, {
        through : models.ParticipantEvent,
        foreignKey : "EventId",
        otherKey : "ParticipantId"
      })
    }
  };
  Event.init({
    name: DataTypes.STRING,
    awal: DataTypes.DATE,
    akhir: DataTypes.DATE,
    template: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};