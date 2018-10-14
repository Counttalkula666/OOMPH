"use strict";

module.exports = {
  up: (queryInterface, Sequelize);
      return queryInterface.createTable('Courses'), [{
      id: {type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         createdAt: new Date(),
         updatedAt: new Date()
        },
      courseNum: { type: DataTypes.STRING,
        allowNull: false,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      courseEnrollNum: { type: DataTypes.INTEGER,
        allowNull: false,
        createdAt: new Date(),
        pdatedAT: new Date()
      },
      courseName: { type: DataTypes.STRING,
        allowNull: false,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      courseDesc: { type: DataTypes.TEXT,
        allowNull: false,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      termOffered: { type: DataTypes.STRING,
        allowNull: false,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      midProcExam: { type: DataTypes.STRING,
        createdAt: new Date(),
        updatedAT: new Date()
      },         
      finProcExam: { type: DataTypes.STRING,
        createdAt: new Date(),
        updatedAT: new Date()
      },         
      hpmReq:  { type: DataTypes.STRING,
        createdAt: new Date(),
        updatedAT: new Date()
      },         
      intReq: { type: DataTypes.STRING,
        createdAt: new Date(),
        updatedAT: new Date()
      }   
      }]}};

  // down: (queryInterface, Sequelize) => {
 
  // };

  // down: function(queryInterface, Sequelize) {
  //   return queryInterface.dropTable('Users');
  // };
