import React from "react"
import { Route } from "react-router-dom"
import { CommentList } from "./posts/CommentList"
import { CreateComment } from "./posts/CreateComment"
import { CreatePost } from "./posts/CreatePost"
import { MyPostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
import { TagList } from "./tags/tagList"

import { EditPost } from "./posts/EditPost"
export const ApplicationViews = () => {
    return <>

    
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        
        <PostProvider>
                <Route exact path ="/mypost">
                    <MyPostList />
                </Route>
                <Route path ="/commentForm">
                    <CreateComment />
                </Route>
                <Route path ="/comments">
                    <CommentList />
                </Route>
                <Route path="/createpost">
                    <CreatePost />
                </Route>
                <Route path="/editpost/:postId(\d+)">
                    <EditPost />
                </Route>
        </PostProvider>
        <Route path="/tagManagement">
            <TagList/>
        </Route>
        
        </main>
        
    </>
}
