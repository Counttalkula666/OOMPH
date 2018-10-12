'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
 */
      return queryInterface.bulkInsert('Courses', [{
      courseNum: { type: DataTypes.STRING,
        allowNull: false,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      courseEnrollNum: { type: DataTypes.INTEGER,
        allowNull: false,
        createdAt: new Date(),
        pdatedAT: new Date()
      },{    
      courseName: { type: DataTypes.STRING,
        allowNull: false,
        createdAt: new Date(),
        updatedAT: new Date()
      },{  
      courseDesc: { type: DataTypes.TEXT,
        allowNull: false,
        createdAt: new Date(),
        updatedAT: new Date()
      },{  
      courseNum: { type: DataTypes.TEXT,
        allowNull: false,
        createdAt: new Date(),
        updatedAT: new Date()
      },{              
      courseNum: { type: DataTypes.TEXT,
      allowNull: false,
      createdAt: new Date(),
      updatedAT: new Date()
      },{  
      course_enrollment_num: INT(6),
      course_name: string(50),
      course_description: text(500),
      term_offered: string(40),
      mid_proc_exam: string(50),
      fin_proc_exam :string(50),
      hpm_req: string(50),
      int_req: string(50),
      PRIMARY KEY (id) 
      }]);
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
