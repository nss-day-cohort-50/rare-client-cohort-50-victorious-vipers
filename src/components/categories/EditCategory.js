import React, { useContext, useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router"
import { CategoryContext } from "./CategoryProvider"
export const EditCategory = () =>{
    const {getCategory, editCategory} = useContext(CategoryContext)
    const {categoryId} = useParams()
    const [category, setCategory] = useState({})
    const [label, setLabel] = useState("")

    const history = useHistory()
    const buildObject = () => {
        return {
                "user_id" : parseInt(localStorage.getItem("rare_category_id")),
                "category_id" : 1,
                "label" : label,
                
        }
    }
    useEffect(() => {
        console.log(categoryId)
        getCategory(categoryId).then((data) => setCategory(data))
    },[])
    useEffect(() => {
        setLabel(category.label)
    },[category])
    return(
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">Edit Category</h1>
                <fieldset>
                    <label htmlFor="label"> Category Name </label>
                    <input  type="text" name="label"  className="form-control" placeholder="Label" value={label}required autoFocus onChange={(event)=>{
                        setLabel(event.target.value)
                    }}/>
                </fieldset>
                <fieldset>         
                    <button className="btn btn-1  " type="submit" onClick={()=>{
                        editCategory(category.id, buildObject()).then(history.push("/mycategory"))
                    }}
                    >OK</button>
                </fieldset>
                <fieldset>         
                    <button className="btn btn-1  " type="cancel" onClick={()=>{
                        editCategory(category.id, buildObject()).then(history.push("/mycategory"))
                    }}
                    >Cancel</button>
                </fieldset>
            </form>
    )
}