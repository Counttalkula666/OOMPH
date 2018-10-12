'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
 */
      return queryInterface.bulkInsert('Courses'), [{
        //do I need to make the following a table somehow so that each course has every field?
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

  down: (queryInterface, Sequelize) => {
 
  };
