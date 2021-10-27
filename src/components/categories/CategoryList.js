import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"
import "./category.css"
import { Link, useHistory } from "react-router-dom"
import DeleteIcon from "@material-ui/icons/Delete"
import SettingsIcon from "@material-ui/icons/Settings"
import AddIcon from '@material-ui/icons/Add';
export const MyCategoryList = () => {
    const {myCategory, fetchMyCategory, deleteCategory} = useContext(CategoryContext)
    const history = useHistory()
    useEffect(()=>{
        fetchMyCategory()
    },[])

    return <><div className="add-category">
                <h4>Create Category</h4>
                <span>
                <Link to="/createcategory">
                    <AddIcon fontSize="large"/>
                </Link>
                </span>
            </div>
    {myCategory?.map((category)=>{
        return(
            <ol className="category-list">
                <div className="category-head">
                    <p>{category?.label}</p>
                </div>        
                        <span>
                            <Link to={`/editcategory/${category.id}`}><SettingsIcon/></Link>
                        </span>
                        <span>
                            <Link onClick={()=>{
                                deleteCategory(category.id).then(()=>fetchMyCategory())
                                
                            }}><DeleteIcon/></Link>
                        </span>
                    
               
            </ol>
            
        )
    })}
    </>
}