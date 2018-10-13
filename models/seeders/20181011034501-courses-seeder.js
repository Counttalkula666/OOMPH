//NEED FILE REVIEW TO CONFIRM PLACEMENT OF DATA/CODE & ADVICE ON NEXT STEP

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) {

      //Add altering commands here.
      //Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkInsert('Courses'), [{
        //do I need to make the following a table so that each course has every field (how)?
        //are these set up properly or do they need to be individual courses instead of fields?
      id: {type: Sequelize.INTEGER
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

  down: (queryInterface, Sequelize) => {
 
  };

  

// -- INSERT INTO courses (course_number, course_enrollment_num, course_name, course_description, term_offered, mid_proc_exam, fin_proc_exam, hpm_req, int_req)

// -- VALUES ("PHW200E", 14857, "Health Policy and Management", "You will learn about health policy and management and health care delivery systems, primarily from a United States perspective. Discover how health policy and management applies concepts from economics, organizational behavior, and political science to the structure, financing, and regulation of public health and the health care delivery systems.", "Summer-1 2018", "May 28th-June 4th", NULL, "Required 1st year course", NULL);

// -- ("PHW289", 14863, "Interdisciplinary Seminar",	"This multidisciplinary course draws from current topics and emerging competencies in public health professions to guide you in the tools and practices that lead to better solutions. The topics are delivered by discipline experts with whom you will engage in hands on workshops, lectures, and gatherings during a week long campus visit.", "Summer-1 2018", NULL, NULL, "Required 2nd Year Course", "Required 2nd Year Course");

// -- ("PHW257", 16223, "Emergency Preparedness and Disaster Management", "Building upon the competencies of epidemiology and biostatistics, we will explore surveillance, mitigation, preparedness, and response and recovery (from natural and “man made” emergency events). You will develop familiarity with the major categories and classifications of disaster events, including weapons of mass destruction, including how the public health system integrates with the National Response Plan and Framework.", "Summer-1 2018", NULL, "June 25th-July 1st", "Elective", "Elective"), 

// -- ("PHW204", 14859, "Mass Communications in Public Health", "You will employ digital innovations and social media to promote healthy behaviors and policy in 6 online weeks. Several guests will visit the online class, including public health professional who are currently engaged in new media and digital communications activities.", "Summer-2 2018", TBA, NULL, "Elective", "Elective"), 

// -- ("PHW206", 14860, "Maternal Child Health Nutrition", "You will be presented with the major nutritional issues faced infants, children, adolescents and reproductive age women in the United States. Course topics include programs and interventions aimed at improving MCH nutrition, evidence based MCH nutrition practice guidelines, application of knowledge to food choices at a personal and programmatic level.", "Summer-2 2018", TBA, NULL, "Elective", "Elective"),

// -- ("PHW227A", 16273, "Healthcare Finance", "Through a case study format, employing the quantitative functions in Excel, you will gain the basic financial and accounting skills needed by all health professionals. Consider financial decision making in an applied manner, interpret financial statements and ratio analysis, and conduct investment assessments in discounted cash flow, healthcare pricing strategies, and cost-volume-profit/break-even analysis.", "Summer-2 2018", "TBA", NULL, "Required Course", "Elective"), 

// -- ("PHW200G", 32092, "Health and Social Behavior", "With a focus on major social, cultural, and bio-behavioral determinants of health as they relate to behavioral interventions and policies, you will explore key concepts and important approaches in health and social behavior; assignments will culminate in a final group project involving a community health issue.", "Fall-1 2018", NULL, NULL, "Required 1st year course", "Required 1st year course"), 

// -- ("PHW224", 28909, "Organizational Behavior & Management in Health Care", "A solid understanding of organizational behavior is critical for managing complex demands and arrangements in public health organizations. Through exploring the active theories and perspectives in management and organizational theory, you will gain a solid comprehension of a diverse set of frameworks and theories relevant to understanding healthcare delivery and public health organizations.", "Fall-1 2018", NULL, "Sep. 10th-16th", "Required", "Elective"),

// -- ("PHW220", 32429, "Advanced Health Policy",	"Building on 200E, this course delves more deeply into the U.S. health care delivery system, including organization, financing, and current policy issues. You will become engaged as a health policy analyst, applying policymaking tools to actual health issues and problems.", "Fall-1 2018", "Sep. 10th-16th", NULL, "Required", "Elective"), 

// -- ("PHW260", 28927, "Infectious Disease",	"More than 1400 different infectious diseases recognized today are distinct from other diseases because they affect all human organ systems and contribute to the burden of many other types of disease: 175 new such diseases have emerged in the past 30 years. You will explore the framework through which all infectious disease problems can be addressed.", "Fall-1 2018", NULL, "Oct. 8th-14th", "Elective", "Elective"), 

// -- ("PHW250F", 32427, "Epidemiologic Methods II Part A", "You will further your exploration of principles and methods of epidemiology, including descriptive and analytic approaches to assessing the distribution of health, disease, and injury in populations and factors that influence those distributions. The emphasis is on concepts, rather than quantitative methods, but some basic calculations will be involved.", "Fall-1 2018", "Sept. 15-16", "Oct. 8th-14th", "Elective", "Elective"), 

// -- ("PHW250", 32976, "Epidemiologic Methods", "Intended as a first class in epidemiology, you will study the principles and methods of epidemiology, including descriptive and analytic approaches to assessing the distributions of health, disease, and injury in populations. The emphasis is on developing an understanding of concepts, rather than quantitative methods, although calculations are involved.", "Fall-2 2018", "Nov. 12th-18th", "Dec. 10th-16th", "Required 1st year course", "Required 1st year course"),

// -- ("PHW226A", 32767, "Health Economics",	"The U.S. spends a great deal on health care, yet has relatively poor health outcomes, quality of care, and equity. You will examine how this situation can be improved by analyzing markets and government policy, including identifying contexts where the free market operates relatively well versus poorly and debating the role government in health and healthcare.", "Fall-2 2018", NULL, "Dec. 10th-16th", "Required", "Elective"), 

// -- ("PHW272C", 32203, "Applied Spatial Data Science for Public Health", "Spatial analysis is a powerful set of techniques for describing patterns of health and disease through locational data. As locational information is aligned with health data, public health practitioners increasingly rely on geo-data to increase impact. Develop proficiency in applying GIS to PH data and perform a wide variety of space and space-time analyses.", "Fall-2 2018", NULL, "Dec. 10th-16th", "Elective", "Elective"),

// -- ("PHW213", 32766, "Global Health Ethics", "Ethical frameworks, theories, and historical references are used to elevate the ethics conversation to the global stage, linking theory to practice in research, experiential learning, and delivery. Consider ethical questions about the delivery of global public health and the roles of governments, academic institutions, organizations, health professions, and citizens as stewards of public health.", "Fall-2 2018", NULL, Dec. 10th-16th, "Elective", "Elective"),

// -- ("PHW250G", 32428, "Epidemiologic Methods II Part B", "Building upon 250F, you will further your exploration of principles and methods of epidemiology, including descriptive and analytic approaches to assessing the distribution of health, disease, and injury in populations and factors that influence those distributions. The emphasis is on concepts, rather than quantitative methods, but some basic calculations will be involved.", "Fall-2 2018", "Nov. 12th-18th", "Dec. 10th-16th", "Elective", "Elective"),

// -- ("PHW200F", 29682, "Introduction to EnvironmentalSocial & Behavioral Health", "Explore environmental agents and factors that contribute to disease in developed and developing countries: i.e. furniture flame retardants, combustion of biomass fuels, or the design of buildings and communities. You will receive an overview of core concepts and their applications in exposure assessment, toxicology, epidemiology, and risk assessment.", "Spring-1 2019", NULL, "TBA", "Required 1st year course", "Required 1st year course"),

// -- ("PHW218", 29684, "Evaluation of Health and Social Programs", "Though exposure to the “life course” of a public health evaluation, from initial planning to implementation and sharing results, you will design an evaluation that informs program and policy decisions, using both qualitative and quantitative methods. Small groups will work together to develop a real-world evaluation plan", "Spring-1 2019", NULL, "TBA", "Elective", "Recommended first year course"),

// -- ("PHW226C", 29692, "Economics of Population Health", "Cost-effectiveness and cost-benefit analysis tools are applied to the evidence base for population health interventions and policies. You will engage with community and clinical preventive services, systemic population health management innovations, behavioral economics approaches, and policies targeting upstream social determinants of population health.", "Spring-1 2019", NULL, "TBA", "Required 2nd year course", "Elective"),

// -- ("PHW212", 29756, "Foundations of Global Health", "You will apply essential concepts of global health to current challenges through course activities, assignment, and readings. Guest lectures will present global health experts detailing real world initiatives, encouraging critical thinking approaches through the application of tools and frameworks that address diverse global health needs.", "Spring-1 2019", "TBA", NULL, "Elective", "Elective"),

// -- ("PHW272A", 29757, "Intro to GIS for Public Health", "You will be introduced to principles, methods, and techniques that empower you to process, manipulate, and visualize spatial data. As maps become an increasingly powerful means of communicating the spatial complexity of health and disease data, public health practitioners can increase the impact of their work by using GSI to convey information and synthesize data from multiple sources.", "Spring-1 2019", NULL, "TBA", "Elective", "Elective"),

// -- ("PHW142", 29683, "Introduction to Probability and Statistics", "Through instruction, you will develop the skills necessary to carry out simple statistical analyses and  interpret statistical results, with a focus on the role of probability and statistics in public health. The course is designed to be interactive and to provide opportunities to learn to “speak” statistics.", "Spring-2 2019", NULL, "TBA", "Required 1st year course", "Required 1st year course"),

// -- ("PHW219", 29685, "Social & Behavioral Health: Intro to Survey Methods", "You will practice survey research in its different forms, including traditional pencil-and-paper surveys, telephone interviews, and web surveys. Using a project topic of your choice, you will develop a survey instrument and write a research plan to use that instrument. Start thinking about one of your favorite public health research areas!", "Spring-2 2019", NULL, "TBA", "Elective", "Required 2nd Year Course"),

// -- ("PHW223", 29686, "Strategic Management and the Health Sector", "The focus is on your development of leadership skills in strategic planning, analysis, and implementation. Emphasis is placed upon the leader’s role in simultaneously taking into account a wide variety of internal and external factors to improve organization and system performance in meeting the health needs of individuals and communities. Prior professional or coursework experience required.", "Spring-2 2019", "TBA", "Required 2nd Year Course", "Elective"),

// -- ("PHW272B", 29758, "GIS for Public Health Practice ", "You will be exposed to the application of GIS technologies for rendering disease surveillance maps, developing effective spatial data visualization, creating compelling, credible spatial risk maps, and acquiring/processing positioning information for health applications. Learn from examples demonstrating the spatial characterization of social and environmental conditions, such as poverty and water quality.", "Spring-2 2019", "TBA", NULL, "Elective", "Elective");
