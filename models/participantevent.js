'use strict';
const romawi = require('../helper/romawi')
const nol = require('../helper/ubahnolnol')
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
      ParticipantEvent.belongsTo(models.Participant,{
        foreignKey: 'ParticipantId'
      })
      ParticipantEvent.belongsTo(models.Event,{
        foreignKey: 'EventId'
      })
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

  ParticipantEvent.beforeCreate((data,options) => {
    console.log(data);
    data.certificate_number = `No. ${nol(data.certificate_number)}/Migas/${romawi(new Date().getMonth()+1)}/${new Date().getFullYear()}`
  })
  return ParticipantEvent;
};