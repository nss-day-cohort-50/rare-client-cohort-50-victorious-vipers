import React, { useState, useEffect } from "react"



const CreateTag = () => {
    const [tag, changeTag] = useState({
        label: ''
    })
    const [tags, setTag] = useState([])

    const reRender = () => {

        return fetch("http://localhost:8088/tags")
            .then(res => res.json())
            .then((ListArray) => {
                setTag(ListArray)

            })
    }
    useEffect(() => {
        reRender()
    }, [])

    console.log(tags)
    
    const savePost = (event) => {
        event.preventDefault()
        const newTag = {
            label: tag.label

        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTag)
        }

        return fetch("http://localhost:8088/tags", fetchOption).then(()=>{reRender()})

    }
    return (
        <>
            <div className="tag-form">
                <form class="tag-form-group">
                    <h2>Create a Tag</h2>
                    {/* <label htmlFor="description">title</label> */}
                    <input type="text" value={tag.label} name="title" className="form-control" placeholder=" Tag Title" required autoFocus
                        onChange={
                            (event) => {
                                const copy = { ...tag }
                                copy.label = event.target.value
                                changeTag(copy)
                            }
                        } />

                    <button className="form-button" onClick={ savePost}>Create</button>
                </form>
            </div>
        </>
    )

}

export default CreateTag