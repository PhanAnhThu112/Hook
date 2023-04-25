import {useState}from "react";
import ReactDOM from "react-dom/client";
export default function Item(props){
    return(
<div>
    <h1>{props.name}</h1>
    <h1>{props.gia}</h1>
</div>
    )};