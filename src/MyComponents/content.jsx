import React from "react";
import { useState } from "react";
import List from "./list";

export default function Content(){

    const [inputtext, changeinput] = useState("");
    const [tasklist, updatelist] = useState([]);

    function handle(event){        
        let newname = event.target.value;
        changeinput(newname);
    }

    function handleclick(){
        updatelist([...tasklist, inputtext]);
        changeinput("");
    }

    function deleteitem(id){        
        updatelist(prevlist =>{
            return prevlist.filter((element, index) =>{
                return id !== index;
            });
        });
    }

    return(
        <>
             <input onChange={handle} type="text" value={inputtext}></input>
             <button type="submit" onClick={handleclick}>click here to add</button>
             <ul>
                {tasklist.map((element, index)=>(
                 <> <List id = {index} key = {index} text= {element} method = {deleteitem}></List>
                    </>
                ))}
             </ul>
        </>
    );
}