import React from "react";


export default function List(props){



    return(
        <div onClick={()=>{props.method(props.id);}} >
            <li>{props.text}</li>
        </div>
    );
}