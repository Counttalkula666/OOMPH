//NEED FILE REVIEW TO CONFIRM PLACEMENT OF DATA/CODE & ADVICE ON NEXT STEP - SEE SEEDERS ALSO

    
    

"use strict';
module.exports = function(sequelize, DataTypes) {
    var Courses = sequelize.define("Courses", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      courseNum: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      courseEnrollNum: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
      },
      courseName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      courseDesc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      termOffered: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      midProcExam: {
        type: DataTypes.STRING,
        defaultValue: "TBA"
      },
      finProcExam: {
        type: DataTypes.STRING,
        defaultValue: "TBA"
      },
      hpmReq:  { type: DataTypes.STRING,
         createdAt: new Date(),
        updatedAT: new Date()
      },         
      intReq: { type: DataTypes.STRING,
        createdAt: new Date(),
        updatedAT: new Date()
      },
    });
    Courses.associate = function(models) {
      // Associating Courses with Posts
      // When a course is deleted, also delete any associated Posts
      Courses.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Courses;
  };
  