import React, {useState, UseEffect} from "react";
import { useHistory } from "react-router";

export const CreateComment = () => {
    const [comment, setComment] = useState("")
    const history = useHistory()

    const postComment = () => {
        
        const commentObject = {
            postId: null,
            author_id: parseInt(localStorage.getItem("rare_user_id")),
            content: comment,
            created_on: Date.now()
        }
        
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObject)
        }
        
        return fetch("http://localhost:8088/comments", fetchOption)
            .then(() => history.push("/comments"))

}
    return (
    <>
    <form>
        <fieldset>
            <label htmlFor="content"></label>
            <input onChange = {(event) => setComment(event.target.value)}
            type="text" name="firstName" className="form-control" placeholder="Type content here" required autoFocus />
        </fieldset>
        <fieldset style={{
                    textAlign: "center"
                }}>
            <button className="btn btn-1 btn-sep icon-send" type="submit" onClick={() => postComment()}>Submit comment</button>
        </fieldset>
    </form>
    </>
    )
}