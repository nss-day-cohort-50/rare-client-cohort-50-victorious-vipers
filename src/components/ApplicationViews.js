import React from "react"
import { Route } from "react-router-dom"
import { MyPostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"

export const ApplicationViews = () => {
    return <>

    
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>
        <PostProvider>
                <Route path ="/mypost">
                    <MyPostList />
                </Route>
        </PostProvider>
        <Route path="/tagManagement">
            <tagList/>
        </Route>
        
        
    </>
}
