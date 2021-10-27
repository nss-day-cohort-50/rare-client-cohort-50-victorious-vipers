import React from "react"
import { Route } from "react-router-dom"
import { CreatePost } from "./posts/CreatePost"
import { CreateCategory } from "./categories/CreateCategory"
import { MyPostList } from "./posts/PostList"
import { MyCategoryList } from "./categories/CategoryList"
import { PostProvider } from "./posts/PostProvider"
import { CategoryProvider } from "./categories/CategoryProvider"
import { TagList } from "./tags/tagList"
import { EditPost } from "./posts/EditPost"
import { EditCategory } from "./categories/EditCategory"

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
        <CategoryProvider>
        <Route exact path ="/mycategory">
                    <MyCategoryList />
                </Route>
                <Route path="/createcategory">
                    <CreateCategory />
                </Route>
                <Route path="/editcategory/:categoryId(\d+)">
                    <EditCategory />
                </Route>
        </CategoryProvider>
        
        </main>
        
    </>
}
