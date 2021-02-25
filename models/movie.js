'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Movie.belongsTo(models.ProductionHouse, {
                foreignKey: 'id_prodctionHouse'
            })

            Movie.belongsToMany(models.Cast, {
                through: models.MovieCast,
                foreignKey: "id_movie",
                otherKey: "id_cast"
            })
        }
    };
    Movie.init({
        name: DataTypes.STRING,
        released_year: {
            type: DataTypes.INTEGER,
            validate: {
                tahunKabisat(value) {
                    if (value % 400 === 0) {
                        throw new Error("tahunya kabisat nanti bala")
                    } else if (value % 100 === 0) {
                        
                    } else if (value % 4 === 0) {
                        throw new Error("tahunya kabisat nanti bala")
                    }
                }
            }
        },
        genre: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Movie',
    });

    return Movie;
};