var inquirer = require("inquirer");
var fs = require("fs");
var mainSequence = [];

var summer1Courses=[];
var summer2Courses=[];
var fall1Courses=[];
var fall2Courses=[];
var spring1Courses=[];
var spring2Courses=[];
var terms = ["Fall 1","Fall 2","Spring 1","Spring 2","Summer 1","Summer 2"];

fs.readFile("../txt/Summer1classes.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
   var dataArr = data.split(",");
   summer1Courses=dataArr;
   //console.log(summer1Courses); 

});
fs.readFile("../txt/Summer2classes.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
   var dataArr = data.split(",");
   summer2Courses=dataArr;
   //console.log(summer2Courses); 

});
fs.readFile("../txt/Fall1classes.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
   var dataArr = data.split(",");
   fall1Courses=dataArr;
   //console.log(fall1Courses); 

});
fs.readFile("../txt/Fall2classes.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
   var dataArr = data.split(",");
   fall2Courses=dataArr;
   //console.log(fall2Courses); 

});
fs.readFile("../txt/Spring1classes.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
   var dataArr = data.split(",");
   spring1Courses=dataArr;
   //console.log(spring1Courses); 

});
fs.readFile("../txt/Spring2classes.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
   var dataArr = data.split(",");
   spring2Courses=dataArr;
   //console.log(spring2Courses); 

});
var year = 2018;
var totalCourses=0;
var currentTerm=[];

start();
function start()
{
    inquirer
    .prompt([
        {
            type: "input",
            name: "year",
            message: "What year?",
          },
          {
        type: "list",
        name: "term",
        message: "Term?",
        choices: terms
      }
    ]).then(function(answer) {
        term=terms.indexOf(answer.term);
        year=answer.year;
     console.log(terms[term]+" "+year);
     setUpTerm(term);
    //  setTimeout(checkAnswer, 500);
    });
}
function setUpTerm(term)
{
    console.log(terms[term]+" "+year);
    //populate course choices from array

    currentTerm=[];
    switch(term) {
        case 0://fall1
            currentTerm=fall1Courses;
            break;
        case 1://fall2
            currentTerm=fall2Courses;
            break;
        case 2://spring1
            currentTerm=spring1Courses;
            break;
        case 3://spring2
            currentTerm=spring2Courses;
            break;
        case 4: //summer1
            currentTerm=summer1Courses;
            break;
        default: //summer2
            currentTerm=summer2Courses;
    } 
    
    pickCourse(term);
    
}
function pickCourse(term)
{
    inquirer
    .prompt([
        {
            type: "list",
            name: "course1",
            message: "Choose a course or opt out of term",
            choices: currentTerm

          }
    ]).then(function(answer) {
        console.log(answer.course1)
        var index=currentTerm.indexOf(answer.course1);
        if(index!==0)currentTerm.splice(index,1);
        makeIt(term,answer.course1);
        //pickSecond(term,answer.course1)
    });//get user input for first course (including OptOut)
   // pickSecond(term, firstCourse);
}
function pickFirst(term)
{
    inquirer
    .prompt([
        {
            type: "list",
            name: "course1",
            message: "First Course",
            choices: currentTerm

          }
    ]).then(function(answer) {
        console.log(answer.course1)
        var index=currentTerm.indexOf(answer.course1);
        if(index!==0)currentTerm.splice(index,1);
        pickSecond(term,answer.course1)
    });//get user input for first course (including OptOut)
   // pickSecond(term, firstCourse);
}
function pickSecond(term,firstCourse)
{
    inquirer
    .prompt([
        {
            type: "list",
            name: "course2",
            message: "Second Course",
            choices: currentTerm

          }
    ]).then(function(answer) {
        console.log(answer.course2)
        makeIt(term,firstCourse,answer.course2);
    });
}
function makeIt(term,firstCourse)
{
    AddToSequence(term,firstCourse)
}
function sequence (termSequence)
{
    mainSequence.push(termSequence);
}
function removeCourse (term, course)
{
    switch(term) {
        case 0://fall1
            var index=fall1Courses.indexOf(course);
            fall1Courses.splice(index,1);
            break;
        case 1://fall2
            var index=fall2Courses.indexOf(course);
            fall2Courses.splice(index,1)
            break;
        case 2://spring1
            var index=spring1Courses.indexOf(course);
            spring1Courses.splice(index,1)
            break;
        case 3://spring2
            var index=spring2Courses.indexOf(course);
            spring2Courses.splice(index,1)
            break;
        case 4://summer1
            var index=summer1Courses.indexOf(course);
            summer1Courses.splice(index,1)
            break;
        case 5://summer2
            var index=summer2Courses.indexOf(course);
            summer2Courses.splice(index,1)
            break;
        default:
            var index=summer2Courses.indexOf(course);
            summer2Courses.splice(index,1);
    }
}
//constructor -------------------------------------
function Semester(term, year, course1) {
    this.term = term;
    this.year = year;
    this.course1 = course1;
}

function AddToSequence(term, course1)
{
    
    var newTerm = new Semester (terms[term], year, course1);
    sequence(newTerm);
    console.log(mainSequence);
    if(course1 !=="OptOut")
    {
        removeCourse(term,course1);
        totalCourses++;
    }

    // if(course2 !=="OptOut")
    // {
    //     removeCourse(term,course2)
    //     totalCourses++;
    // }
    if(totalCourses>=5)
    {
        console.log("Done!");
        return;
    }
    if(term===5)term=0;
    else term++;
    if (term === 2)
    { 
       year++;
    }
    setUpTerm(term);
}