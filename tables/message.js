/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'Id'
    },
    idTopic: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'IdTopic'
    },
    checkRead: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'CheckRead'
    },
    autor: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'Autor'
    },
    contentMessage: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      field: 'ContentMessage'
    },
    photo: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      field: 'Photo'
    },
    quote: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      field: 'Quote'
    },
    mTime: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'MTime'
    },
    mView: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      field: 'MView'
    },
    info: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      field: 'Info'
    },
    quoteStatus: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      field: 'QuoteStatus'
    }
  }, {
    tableName: 'message',
    timestamp:false,
    createdAt:false,
    updatedAt:false,
  });
};
