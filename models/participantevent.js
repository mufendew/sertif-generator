'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParticipantEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ParticipantEvent.init({
    ParticipantId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER,
    certificate_number: DataTypes.STRING,
    validFrom: DataTypes.DATE,
    ValidUntil: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ParticipantEvent',
  });
  return ParticipantEvent;
};