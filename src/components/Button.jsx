import { useState } from "react";

function Button(props){
    // let label="click me";
    //useState,useEffect,useRef,useReducer
    const[label,setLabel] = useState("Click Me1");//state isolate 
    let changeLabel=()=>{
        setLabel("Clicked");
        console.log(label);
    }
    return <button className="mx-3 border px-3 py-1 bg-red-500 text-white" onClick={changeLabel}>{label}</button>
}
export default Button;