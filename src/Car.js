import {useState}from "react";
import ReactDOM from "react-dom/client";
export default function Car(){
    const [car,setCar]=useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red",


    });

    const update=()=> {
        setCar(previousState=>{
            return{...previousState,color:"blue"}
        });}
    return(
        <>
        <h1>My{car.brand}</h1>
        <p>It is a setCar{car.color}{car.model}from{car.year}</p>
        <button type="button" onClick={update}>Blue</button>
        </>
    )
}