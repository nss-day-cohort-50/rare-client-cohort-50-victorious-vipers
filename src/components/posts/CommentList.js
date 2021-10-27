import React, {useState, useEffect} from "react";

export const CommentList = ({postId}) => {
    const [comments, setComments] = useState([])

    const reRender = () => {
        return fetch(`http://localhost:8088/comments?post_id=${postId}`)
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
                            <div>{comment.post.content}</div>
                            <div>{comment.content}</div><button onClick={() => deleteListItem(comment.id)}>Delete</button>
                        </>)}

                        )
                    }
                </div>
        </>
    )
}