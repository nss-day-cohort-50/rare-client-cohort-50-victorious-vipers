import React from "react"



export const CreateTag = () =>{
return(
    <>
    <div>
        <form>
            <h2>Create a Tag</h2>
            <label htmlFor="description">title</label>
            <input  type="text" name="title" className="form-control" placeholder=" Tag Title" required autoFocus />
        </form>
    </div>
    </>
)

}