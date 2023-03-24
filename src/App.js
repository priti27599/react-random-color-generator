import React,{useState} from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h2>Color Generator</h2>
      <Generator/>
    </div>
  );
}

const Generator = () =>{
  const intColor = ['#a16945','#ee9bff','#4ca29a'];
  const [color, setColor]= useState(intColor)

  function colorGenrate(){
    let str = '0123456789abcedef';
    let col ='';
    for(let i=0; i<6; i++)
    {
      let index = Math.floor(Math.random()*str.length);
      col+=str[index];
    }
    setColor('#'+col);
  }

  const pageStyle={
    backgroundColor: `${color}`,
    height: "60px"
  }

  return(
    <div >
    <button onClick={colorGenrate}>genrate</button>
    <div style={pageStyle}>{color}</div>
    </div>
  )
}
