'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class MovieCast extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
	MovieCast.init({
		id_movie: {
			type: DataTypes.INTEGER,
		},
		id_cast: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Cast Required"
				}
			}
		},
		role: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					msg: "Role Required"
				}
			}
		}
	}, {
		sequelize,
		modelName: 'MovieCast',
	});
	
	return MovieCast;
};