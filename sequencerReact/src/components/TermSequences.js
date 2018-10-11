import React from "react";
import fall1 from "../txt/fall1.json";
import fall2 from "../txt/fall2.json";
import spring1 from "../txt/spring1.json";
import spring2 from "../txt/spring2.json";
import summer1 from "../txt/summer1.json";
import summer2 from "../txt/summer2.json";
import Common from "./common.js";
var ct=Common.curTerm;
var terms = ["Fall 1","Fall 2","Spring 1","Spring 2","Summer 1","Summer 2"];
var years =[2019,2020,2021,2022,2023,2024.2025,2026,2027,2028];
// var ct=0;
var cy=0;
// var cc=Common.cc;
class TermSequences extends React.Component {
    state = {
        currentCourse: 0,
        curTerm: 0,
        curYear:0
      };
    //   changeCourse = (id) => {
    //     console.log(id);
      
    // };
      render(){
          return(<div>
            <h3>{terms[this.state.curTerm]}, {years[this.state.curYear]}</h3>
           
            {this.state.curTerm===0 && fall1[Common.cc].name} {this.state.curTerm===0 && fall1[Common.cc].title}
            {this.state.curTerm===1 && fall2[Common.cc].name} {this.state.curTerm===1 && fall2[Common.cc].title}
            {this.state.curTerm===2 && spring1[Common.cc].name} {this.state.curTerm===2 && spring1[Common.cc].title}
            {this.state.curTerm===3 && spring2[Common.cc].name} {this.state.curTerm===3 && spring2[Common.cc].title}
            {this.state.curTerm===4 && summer1[Common.cc].name} {this.state.curTerm===4 && summer1[Common.cc].title}
            {this.state.curTerm===5 && summer2[Common.cc].name} {this.state.curTerm===5 && summer2[Common.cc].title}
        </div>)
      }
}

// const TermSequences = () => (<div>
//     <h3>{terms[ct]}, {years[cy]}</h3>
   
//     {ct===0 && fall1[Common.cc].name} {ct===0 && fall1[Common.cc].title}
//     {ct===1 && fall2[Common.cc].name} {ct===1 && fall2[Common.cc].title}
//     {ct===2 && spring1[Common.cc].name} {ct===2 && spring1[Common.cc].title}
//     {ct===3 && spring2[Common.cc].name} {ct===3 && spring2[Common.cc].title}
//     {ct===4 && summer1[Common.cc].name} {ct===4 && summer1[Common.cc].title}
//     {ct===5 && summer2[Common.cc].name} {ct===5 && summer2[Common.cc].title}
// </div>);

export default TermSequences;
