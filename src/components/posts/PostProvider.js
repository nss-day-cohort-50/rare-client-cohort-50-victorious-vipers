
import React,{ createContext, useState } from "react";
const api = "http://localhost:8088"
export const PostContext = createContext()

export const PostProvider = (props) => {
    const currentUser = parseInt(localStorage.getItem("rare_user_id"))
    const [myPost, setMyPost] = useState([])

    const fetchMyPost = (id) =>{
        return fetch(`${api}/post?user_id=${currentUser}`)
            .then(res => res.json())
            .then((data) => {
                setMyPost(data)
            })
    }
    return <PostContext.provider value={fetchMyPost, myPost}>{props.children}</PostContext.provider>
}