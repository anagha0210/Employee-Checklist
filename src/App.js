
import './App.css';
import React,{useState,useEffect} from 'react'
import Employee from './Components/Employee';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Notfound from './Components/Notfound';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Group from './Components/Group';
import Navigation from './Components/Navigation';
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Routes = require("react-router-dom").Routes;
// const Link = require("react-router-dom").Link;

function App() {
  //in order to keep the team and employee list changes persistant with the localstorage
  const [team,setTeam]=useState(JSON.parse(localStorage.getItem('TeamList'))||"Team A");
  //function to change the selection team in the selection box
  function changeteam(e){
    setTeam(e.target.value);
    // setEmployee((employee.map((employee)=>{ //doesnt work for some reason
    //   if(employee.teamName==e.target.value)
    //   return employee;
    // })));
  };

  //good god its confusing, but wt this function does is
  //wehn the team is selected from the option, it will traverse the employee array and map each employee object to check
  //first determine which card was clicked by user through (employee.id==e.target.id)
  //then check if that card is of the selected team that is currently filteres i.e employee.teamName==team
  //if so, then remove them from the team by employee.teamName:"" , otherwise ass then to the team i.e employee.teamName:team
  //at the css side,everytime a card is selected,we have to toggle between two states
  //when we filter through a team,all the cards belonging to that team will hade like a border or a shade
  //when user clicks those selected cards, the border should disaapera i.e meaning they were removed from the team with the above logic
  //when they click on any other card not having a border, they/that card is added to the respective team, again through the above logic
  function onclicktoggle(e){
    const temp=employee.map((employee)=>
      employee.id===parseInt(e.currentTarget.id)?
    (employee.teamName===team)?{...employee,teamName:""}:{...employee,teamName:team}:employee);

    //now we add these changes to employee list through setEmployee
    setEmployee(temp);
  };
  
  const [employee,setEmployee]=useState(JSON.parse(localStorage.getItem('EmployeeList'))||[{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "Team A"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "Team B"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "Team C"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "Team D"
  }]);
  //using useEffect to store the changes in team and employees made to the localstorage as a sideeffect
  useEffect(()=>{localStorage.setItem('EmployeeList',JSON.stringify(employee))},[employee]);
  //storing changes to team 
  useEffect(()=>{localStorage.setItem('TeamList',JSON.stringify(team))},[team]);
  return (
    <BrowserRouter className="App">
      <Navigation/>
      <Header selectedteam={team} countofemployees={employee.reduce((count,employee)=>{if(employee.teamName===team) count++; return count;},0)} />
       <Routes>
      <Route path="/" element={<Employee team={team} employee={employee} changeteam={changeteam} onclicktoggle={onclicktoggle}/>}></Route>
      <Route path="/group" element={<Group team={team} employee={employee} setteam={setTeam } />}></Route>
      {/* BAsically,creating a route to display a not found or invalid route message if the user types or tries to enter a invalid url . Which is why we are using *-anything */}
      <Route path="*" element={<Notfound/>}></Route>
      </Routes> 
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
