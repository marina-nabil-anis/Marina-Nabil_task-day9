import "./RightComponent.css";
import TimeItems from "../TimeItems/TimeItems";
import WorkLogo from "../../assets/icon-work.svg";
import PlayLogo from "../../assets/icon-play.svg";
import StudyLogo from "../../assets/icon-study.svg";
import ExerciseLogo from "../../assets/icon-exercise.svg";
import SocialLogo from "../../assets/icon-social.svg";
import SelfLogo from "../../assets/icon-self-care.svg";
import { useEffect, useState } from "react";
function RightComponent() {
  const [ArrayofOpject,setArrayofOpject] = useState(
    [
        {
          "SelectionColor": "hsl(15, 100%, 70%)",
          "SelectionLogo":  WorkLogo ,
          "ActionLabel": "Work",
          "Hours": "32hrs",
          "LastWeek": "Last Week-36hrs",
          "uniqueID": 1
        },
        {
            "SelectionColor": "hsl(195, 74%, 62%)",
            "SelectionLogo": PlayLogo,
            "ActionLabel": "Play",
            "Hours": "10hrs",
            "LastWeek": "Last Week-8hrs",
            "uniqueID": 2
          },
          {
            "SelectionColor": "hsl(348, 100%, 68%)",
            "SelectionLogo": StudyLogo,
           "ActionLabel": "Study",
            "Hours": "4hrs",
           "LastWeek": "Last Week-7hrs",
            "uniqueID": 3
          },
          {
            "SelectionColor": "hsl(145, 58%, 55%)",
            "SelectionLogo": ExerciseLogo,
            "ActionLabel": "Exercise",
            "Hours": "4hrs",
            "LastWeek": "Last Week-5hrs",
            "uniqueID": 4
          },
          {
            "SelectionColor": "hsl(264, 64%, 52%)",
           "SelectionLogo": SocialLogo,
            "ActionLabel": "Social",
            "Hours": "5hrs",
            "LastWeek": "Last Week-10hrs",
            "uniqueID": 5
          },
          {
            "SelectionColor": "hsl(43, 84%, 65%)",
            "SelectionLogo": SelfLogo,
            "ActionLabel": "Self care",
            "Hours": "2hrs",
            "LastWeek": "Last Week-2hrs",
            "uniqueID": 6
          }
          
      
  ]);
   

//   useEffect(()=>{
// function CallAPI(){
// console.log('Fire');

// fetch("http://localhost:3000/ArrayofOpject").then((response)=>{
//   return response.json();
// }).then((finalResult)=>{
// console.log(finalResult);
// setArrayofOpject(finalResult);
// });
// }

// CallAPI();
//   },[])

  return (
    <div id="RightDiv">
   {ArrayofOpject.map((item)=>{
    return(
        <TimeItems
        SelectionColor= {item.SelectionColor}
        SelectionLogo={item.SelectionLogo}
        ActionLabel= {item.ActionLabel}
        Hours= {item.Hours}
        LastWeek={item.LastWeek} >
          key={item.uniqueID}

        </TimeItems>
    )
   })}
    </div>
  );
}

export default RightComponent;
