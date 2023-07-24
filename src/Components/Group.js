
import React, {useState} from 'react'
export default function Group({team,employee,setteam}) {
    
    function groupmembers1()
     {
        //doing this seperately so that each team has that gets selected has 3 properties, team , members in that team and a peroperty collaosed i.e if the user cliks on that team,show members else collapse.
        const teams=[];
        const listA=employee.filter((employee)=>{if(employee.teamName==="Team A") return employee;});
        var teamA={team:"Team A", members:listA,collapsed:team==="Team A"?false:true}; //basically we are creating an object contaning the team name,the members are the collapse property,like a dic container of all details. If selected ,show team list,if not collapse;
        //never do this,this violated the DRY property which u should never do!!
        teams.push(teamA);
        const listB=employee.filter((employee)=>{if(employee.teamName==="Team B") return employee;});
        var teamB={team:"Team B", members:listB,collapsed:team==="Team B"?false:true};
        teams.push(teamB);
        const listC=employee.filter((employee)=>{if(employee.teamName==="Team C") return employee;});
        var teamC={team:"Team C", members:listC,collapsed:team==="Team C"?false:true};
        teams.push(teamC);
        const listD=employee.filter((employee)=>{if(employee.teamName==="Team D")return employee; });
        var teamD={team:"Team D", members:listD,collapsed:team==="Team D"?false:true};
        teams.push(teamD);
        return teams;
     };
     const [groupmembers,setgroup]=useState(groupmembers1());
     //so now groupmebers1() will return a array of 4 objects,each object having the team name ,members and collapsed property.This array of teams object is initialized as groupmebers1 state variable.
     //so now,through groupmebers1 .map,we take individual object,and these individual objects.members have the list of members;

        function toggleteam(e){
             var transformgroups=groupmembers.map((groupdata)=>groupdata.team===e.currentTarget.id?
             {...groupdata,collapsed:!groupdata.collapsed}:groupdata);
             setgroup(transformgroups);//cuz we have set that div elements id's to their items.team
             setteam(e.currentTarget.id); //didnt understand properly mann
        }
    return (
      <main className="container d" >
        {
            groupmembers.map((item)=>{// this item is an i=object i.e {team:team,members:listA,collapsed:false or true}
                return(
                    <div key={item.team} className="card mt-2" style={{cursor:"pointer"}}>
                        <h4 id={item.team} className="card-header text-secondary" onClick={toggleteam}>Team Name : {item.team}</h4>
                        <div id={"collapse_"+item.team} className={item.collapsed===true?"collapse ":""}>
                            <hr/>
                            {
                                item.members.map(member=>{
                                    return (
                                        <div className="mt-3">
                                            <h5 className="card-title mt-2">
                                                <span className="text-dark">Full Name: {member.fullName}
                                                </span>
                                            </h5>
                                            <p>Designation: {member.designation}</p>
                                        </div>
                                    );
                                    })
                            }
                        </div>
                    </div>
                )
            })
        }
        
      </main>
    )
}
