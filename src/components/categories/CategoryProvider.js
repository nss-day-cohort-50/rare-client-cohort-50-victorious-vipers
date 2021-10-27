import React,{ createContext, useState } from "react";
const api = "http://localhost:8088"
export const CategoryContext = createContext()



export const CategoryProvider = (props) => {
    const currentCategory = parseInt(localStorage.getItem("rare_category_id"))
    const [myCategory, setMyCategory] = useState([])
    const getCategory = (id) => {
        return fetch(`${api}/categories/${id}`)
            .then(res => res.json())
            
    }
    const fetchMyCategory = (currentCategory) => {
        return fetch(`${api}/categories?label=${currentCategory}`)
            .then(res => res.json())
            .then((data) => {
                setMyCategory(data)
            })
    }
    const createCategory = (object) => {
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }
        
        return fetch(`${api}/categories`, fetchOption)
            
    }
    const deleteCategory = (id) =>{
        return (fetch(`${api}/categories/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: null
    }))
    }
    const editCategory = (id, object) => {
        const dataToSend = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)

        }
        return fetch(`${api}/categories/${id}`, dataToSend)
    }
    return (<CategoryContext.Provider value={{
        fetchMyCategory, myCategory, createCategory,deleteCategory, getCategory, editCategory
    }}>{props.children}</CategoryContext.Provider>)
}