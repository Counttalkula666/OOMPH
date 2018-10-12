//NEED FILE REVIEW TO CONFIRM PLACEMENT OF DATA/CODE & ADVISE ON NEXT STEP - SEE SEEDERS ALSO

module.exports = function(sequelize, DataTypes) {
    var Courses = sequelize.define("Courses", {
      courseNum: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseEnrollNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      courseName: {
        type: DataTypes.TEXT,
        allowNull: false,
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
  