module.exports = function(sequelize, DataTypes) {
  var Dogs = sequelize.define("Dogs", {
    // The email cannot be null, and must be a proper email before creation
    Dog_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Size: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Personality: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  //Associate Dogs with User
  Dogs.associate = function (models) {
    Dogs.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  }
  return Dogs;
}


