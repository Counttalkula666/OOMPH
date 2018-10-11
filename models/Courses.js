module.exports = function(sequelize, DataTypes) {
    var Courses = sequelize.define("Courses", {
      courseNum: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      courseEnrollNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      courseName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      courseDesc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      term: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      midProcExam: {
        type: DataTypes.STRING,
        defaultValue: "TBA"
      },
      finProcExam: {
        type: DataTypes.STRING,
        
        
      },
    });
    return Courses;
  };
  