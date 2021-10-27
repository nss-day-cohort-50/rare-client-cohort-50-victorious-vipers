import React, { useContext, useRef } from "react"
import { useHistory } from "react-router"
import { CategoryContext } from "./CategoryProvider"
export const CreateCategory = () =>{
    const {createCategory} = useContext(CategoryContext)
    const label = useRef()
    const content = useRef()
    const history = useHistory()
    const buildObject = () => {
        return {
                "id" : parseInt(localStorage.getItem("rare_user_id")),
                "category_id" : 1,
                "label" : label.current.value,
                "content" : content.current.value 
        }
    }
    return(
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">New Category</h1>
                <fieldset>
                    <label htmlFor="label"> New Category </label>
                    <input  type="text" name="label" ref={label} className="form-control" placeholder="new-category" required autoFocus />
                </fieldset>
                <fieldset>
                    <button className="btn btn-1  " type="submit" onClick={() => {
                        createCategory(buildObject()).then( history.push("/mycategory"))
                    }
                    }>OK</button>
                </fieldset>
            </form>
    )
}

