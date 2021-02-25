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
    convert(date){
      var d = new Date(date),
      month = (d.getMonth() + 1),
      day = d.getDate(),
      year = d.getFullYear();

      if (month < 10) 
          month = '0' + month;
      if (day < 10) 
          day = '0' + day;
      return [year, month, day].join('-');
    }
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