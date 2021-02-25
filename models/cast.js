'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Cast extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Cast.belongsToMany(models.Movie, {
                through: models.MovieCast,
                foreignKey: "id_cast",
                otherKey: "id_movie"
            })
        }
        getFullName() {
            return this.first_name + " " + this.last_name
        }
    };
    Cast.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        birth_year: DataTypes.INTEGER,
        gender: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Cast',
    });

    Cast.beforeCreate((data, options) => {
        if (!data.last_name) {
            data.last_name = data.first_name
        }
    })

    Cast.beforeBulkUpdate((data, options) => {
        if (!data.attributes.last_name) {
            data.attributes.last_name = data.attributes.first_name
        }
    })

    return Cast;
};