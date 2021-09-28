module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		summary: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
    wot_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
	}, {
		timestamps: false,
	});
};