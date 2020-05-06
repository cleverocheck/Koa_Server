/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'Id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'Name'
    },
    avatar: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      field: 'Avatar'
    }
  }, {
    tableName: 'user',
    timestamp:false,
    createdAt:false,
    updatedAt:false,
  });
};
