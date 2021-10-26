import React, {useState, UseEffect, useEffect} from "react";

export const CommentList = () => {
    const [comments, setComments] = useState([])

    const reRender = () => {
        return fetch("http:localhost:8088/comments")
            .then(res => res.json())
            .then((data) => {
                setComments(data)
            })
    }
    useEffect (() => {
        reRender()
    } , [])

    const deleteListItem = (id) => {
        
            return fetch(`http://localhost:8088/comments/${id}`, {
                method: "DELETE"
            }) 
            .then(() => {
                reRender()
            })
        }

    return(
        <>
            <h1>Comments</h1>
                <div>
                    {
                        comments.map((comment) => {
                        return (
                        <>
                            <div>{comment.content}</div><button onClick={() => deleteListItem(comment.id)}>Delete</button>
                        </>)}

                        )
                    }
                </div>
        </>
    )
}