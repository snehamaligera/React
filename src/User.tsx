import React from "react";
import './App.css';

let cssAlignLeft ={ marginLeft:'5px'}
export default function User(props:any){
    return(
        <div className="user">
            <img src={props.dp} style={cssAlignLeft}/>
            <hr/>
            <strong>{props.userName}</strong>
            <br/>
            <strong>{props.pwd}</strong>
        </div>
    )
}