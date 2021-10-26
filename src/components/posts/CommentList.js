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

    return(
        <>
            <h1>Comments</h1>
                <div>
                    {
                        comments.map((comment) => <div> {comment.content}

                        </div>

                        )
                    }
                </div>
        </>
    )
}