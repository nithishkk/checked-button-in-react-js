import React from "react";
import "./style.css";

export default function App() {
  const[darkMode,setDarkMode]=React.useState(false)
  console.log(darkMode,"nithish")
  // React.useEffect((e)=>{
  //   setDarkMode(e.target.checked)
  // },[])
  const Change=(e)=>{
    console.log(e,"e")
    setDarkMode(e.target.checked)
  }
  return (
    
    <div style={{background : darkMode ? "#333" :"#FFF"}}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="checkbox" onChange={Change}/>
    </div>
  );
}
