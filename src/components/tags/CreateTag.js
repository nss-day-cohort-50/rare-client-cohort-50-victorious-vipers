import React, { useState } from "react"



const CreateTag = () => {
    const [tag, changeTag] = useState({
        label: ''
    })




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
        return fetch("http://localhost:8088/tags", fetchOption)

    }
    return (
        <>
            <div className="tag-form">
                <form class="tag-form-group">
                    <h2>Create a Tag</h2>
                    {/* <label htmlFor="description">title</label> */}
                    <input type="text" name="title" className="form-control" placeholder=" Tag Title" required autoFocus
                        onChange={
                            (event) => {
                                const copy = { ...tag }
                                copy.label = event.target.value
                                changeTag(copy)
                            }
                        } />
                    <button className="form-button" onClick={savePost}>Create</button>
                </form>
            </div>
        </>
    )

}

export default CreateTag