
import React, { useEffect, useState } from "react";

export const TagList = () =>{

    const[tags, changeTag] = useState([])

    useEffect(
        () =>{
            fetch("http://localhost:8088/tags")
            .then(res => res.json())
            .then((ListArray) =>{
                changeTag(ListArray)
            })
        }
    )


    return(
        <>
        </>
    )
}