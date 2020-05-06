/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topic', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'Id'
    },
    idArt: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'IdArt'
    },
    dataCreate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'DataCreate'
    },
    lastMessageId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lastMessageId'
    }
  }, {
    tableName: 'topic',
    timestamp:false,
    createdAt:false,
    updatedAt:false,
  });
};
