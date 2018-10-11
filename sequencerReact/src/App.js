import React, {Component} from "react";
import CourseListings from "./components/CourseListings";
import Wrapper from "./components/Wrapper";

import fall1 from "./txt/fall1.json";
import fall2 from "./txt/fall2.json";
import spring1 from "./txt/spring1.json";
import spring2 from "./txt/spring2.json";
import summer1 from "./txt/summer1.json";
import summer2 from "./txt/summer2.json";

var fall1C=[];
var fall2C=[];
var spring1C=[];
var spring2C=[];
var summer1C=[];
var summer2C=[];

var ct=0;
var cc=0;
var cci=0;
var cy=0;

var years =[2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2038];
var unitsLeft=14;

var terms = ["Fall 1","Fall 2","Spring 1","Spring 2","Summer 1","Summer 2"];
var seqs=[];
var courseString="";
var finalTerm =0;
var finalYear=0;

StartMeUp();
function StartMeUp()
{
    for(let i =0;i<fall1.length;i++)
    {
        let txt=fall1[i].name+": "+fall1[i].title;
        fall1C.push(txt);
    }
    for(let i =0;i<fall2.length;i++)
    {
        let txt=fall2[i].name+": "+fall2[i].title;
        fall2C.push(txt);
    }
    for(let i =0;i<spring1.length;i++)
    {
        let txt=spring1[i].name+": "+spring1[i].title;
        spring1C.push(txt);
    }
    for(let i =0;i<spring2.length;i++)
    {
        let txt=spring2[i].name+": "+spring2[i].title;
        spring2C.push(txt);
    }
    for(let i =0;i<summer1.length;i++)
    {
        let txt=summer1[i].name+": "+summer1[i].title;
        summer1C.push(txt);
    }
    for(let i =0;i<summer2.length;i++)
    {
        let txt=summer2[i].name+": "+summer2[i].title;
        summer2C.push(txt);
    }
    FinalTerm();
}
function SequenceThis (term, year, course)
{
    this.term=term;
    this.year=year;
    this.course=course;
}

function FinalTerm()
{
 for (let i =0; i<unitsLeft-1;i++)
 {
     finalTerm++;
     if(finalTerm>5)
     {
         finalTerm=0;
     }
 }
 finalYear=years[cy+Math.ceil(unitsLeft/6)];
 if(finalTerm<2)finalYear--;
 console.log(terms[finalTerm]+" "+finalYear)

}
class App extends Component {
    
    state = {
      fall1,fall2,
      spring1,spring2,
      summer1,summer2,
      curID:0,
      currentCourse: 0,
      curTerm: 0,
      curYear:0
    };
        
    changeCourse = id => {
        //console.log(id)
        cc=id;
        cci=id;
        //console.log("CCI "+cci)
        this.setState({curID: id})
        //console.log(this.state.curID)
        };
    changeTerm = () => {
        if(unitsLeft===0)return;
        var newSeq = new SequenceThis(terms[this.state.curTerm],years[this.state.curYear],courseString)
        seqs.push(newSeq);
        if(cc!==0)
        {
            unitsLeft--;
            //console.log("term "+terms[ct])
            switch (ct)
            {
                case 0:
                    fall1C.splice(cci,1);

                break;
                case 1:
                    fall2C.splice(cci,1);

                break;
                case 2:
                    spring1C.splice(cci,1);

                break;
                case 3:
                    spring2C.splice(cci,1);

                break;
                case 4:
                    summer1C.splice(cci,1);

                break;
                case 5:
                    summer2C.splice(cci,1);

                break;
                default:
                //
            }
        }
        else{
            finalTerm++;
            if(finalTerm>5)
            {
                finalTerm=0;
            }
            if(finalTerm===2)finalYear++;
        }
        this.setState({currentCourse: 0});
        this.setState({curID: 0});
        cc=0;
        cci=0;
        if(this.state.curTerm<terms.length-1)
           { 
               this.setState({ curTerm: this.state.curTerm + 1 });
               ct++;
               
            }
        else {
            this.setState({ curTerm: 0})
            ct=0;
        }
        if(ct===2)
           { 
               this.setState({ curYear: this.state.curYear + 1 });
               cy++;
               if(cy>years.length)
               {
                   years.push(years[cy]++)
                   this.setState({ curYear: this.state.curYear + 1 });
               }
            }

      };
    render(){
        return (
            
            <div className="container jumbotron ">
            
                <div className="row">
                    <div className="col">
                    <h1>Sequence</h1><hr></hr>
 
                    {unitsLeft>0 ?(<h3>{terms[this.state.curTerm]}, {years[this.state.curYear]}</h3>):<h3>Finished</h3>}
                    
                    {unitsLeft>0 ?(this.state.curTerm===0 && <p>{courseString=fall1[cci].name+": "+fall1[cci].title}</p>):("")}
                   
                    {unitsLeft>0 ?(this.state.curTerm===1 && <p>{courseString=fall2[cci].name+": "+fall2[cci].title}</p>):("")}
                   
                    {unitsLeft>0 ?(this.state.curTerm===2 && <p>{courseString=spring1[cci].name+": "+spring1[cci].title}</p>):("")}
                    
                    {unitsLeft>0 ?(this.state.curTerm===3 && <p>{courseString=spring2[cci].name+" "+spring2[cci].title}</p>):("")}
                   
                    {unitsLeft>0 ?(this.state.curTerm===4 && <p>{courseString=summer1[cci].name+": "+summer1[cci].title}</p>):("")}
                    
                    {unitsLeft>0 ?(this.state.curTerm===5 && <p>{courseString=summer2[cci].name+": "+summer2[cci].title}</p>):("")} 

                    <span onClick={() => this.changeTerm()} className="remove btn btn-primary">Add to sequence</span>

                    <hr/>
                    <h5>Units left until graduation: {unitsLeft}</h5>
                    <h5>Estimated final term: {terms[finalTerm]}, {finalYear}</h5>
                    {seqs.map(seq => (<p key={seqs.indexOf(seq)}> 
                        {seq.term},  {seq.year}: {seq.course}</p>))}
                    </div>
                    
                    <div className="col">
                    <h1>Course Listings</h1><hr></hr>
                    <h3>{terms[this.state.curTerm]}</h3>

                    <Wrapper>
                    {this.state.curTerm===0 && fall1C.map(course => (
                    <CourseListings
                        changeCourse={this.changeCourse}
                        id={fall1C.indexOf(course)}
                        key={fall1C.indexOf(course)}
                        name={course}
                        
                    />
                    ))}
                    {this.state.curTerm===1 && fall2C.map(course => (
                    <CourseListings
                        changeCourse={this.changeCourse}
                        id={fall2C.indexOf(course)}
                        key={fall2C.indexOf(course)}
                        name={course}
                        
                    />
                    ))}
                    {this.state.curTerm===2 && spring1C.map(course => (
                    <CourseListings
                        changeCourse={this.changeCourse}
                        id={spring1C.indexOf(course)}
                        key={spring1C.indexOf(course)}
                        name={course}
                       
                    />
                    ))}
                    {this.state.curTerm===3 && spring2C.map(course => (
                    <CourseListings
                        changeCourse={this.changeCourse}
                        id={spring2C.indexOf(course)}
                        key={spring2C.indexOf(course)}
                        name={course}
                        
                    />
                    ))}
                    {this.state.curTerm===4 && summer1C.map(course => (
                    <CourseListings
                        changeCourse={this.changeCourse}
                        id={summer1C.indexOf(course)}
                        key={summer1C.indexOf(course)}
                        name={course}
                        
                    />
                    ))}
                    {this.state.curTerm===5 && summer2C.map(course => (
                    <CourseListings
                        changeCourse={this.changeCourse}
                        id={summer2C.indexOf(course)}
                        key={summer2C.indexOf(course)}
                        name={course}
                        
                    />
                    ))}
                </Wrapper>
                    </div>
                </div>
            </div>
        );
    }

}


export default App;
