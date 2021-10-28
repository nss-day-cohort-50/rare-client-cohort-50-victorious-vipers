import React, {useState, useEffect} from "react";
import "./comment.css"

export const CommentList = ({postId, comments, reRender}) => {
    
   
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
            <div className="commentOutside">
                
                    <div className = "commentInside"> 
                    {
                        comments?.map((comment) => {
                           
                        return (
                        <>
                            <div className="individualComment">
                                <div>{comment.content}</div>
                                <div>{comment.user.username}</div>
                                <button onClick={() => deleteListItem(comment.id)}>Delete</button>
                            </div>
                        </>)}

                        )
                    }
                    </div>
                </div>
        </>
    )
}