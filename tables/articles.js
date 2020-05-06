/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'Id'
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Title'
    },
    manufacture: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Manufacture'
    },
    articul: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Articul'
    },
    price: {
      type: "BINARY(50)",
      allowNull: true,
      field: 'Price'
    },
    photo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Photo'
    }
  }, {
    tableName: 'articles',
    timestamp:false,
    createdAt:false,
    updatedAt:false,
  });
};
