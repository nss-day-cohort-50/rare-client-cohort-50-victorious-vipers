import React, { useEffect, useState } from "react"

export const SinglePost= () => {
const [post, setpost] = useState({})


const fetchSinglePost= (id) => {
    return fetch(`http://localhost:8088/${id}`)
    .then(res => res.json())
    .then((data) => {
        setPost(data)
    })
}
}

useEffect(() => {
    fetchSinglePost()
}, [])


return (
    <>
        {post.map(()=> {
            return (
                <>
                    <h1>{post.title}</h1> <div>{post.content}</div><div>{post.user.first_name} {post.user.last_name}</div><div>{post.publication_date}</div>
                </>
            )
            
        })}
    </>
)