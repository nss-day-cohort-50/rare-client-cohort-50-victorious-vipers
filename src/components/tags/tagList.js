
import React, { useEffect, useState } from "react";
import './tag.css'

export const TagList = () => {

    const [tags, changeTag] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/tags")
                .then(res => res.json())
                .then((ListArray) => {
                    changeTag(ListArray)
                })
        }, []
    )


    return (
        <>
            <h2 className='tag-title'>Tags</h2>
            {
                tags.map(
                    (tag) => {
                        return <div className='tag' key={`tag--${tag.id}`}>
                            <div className="tag-group">
                                <div className='tag-edit-delete'>
                                    <button>edit</button>
                                    <button>delete</button>
                                </div>
                                <p>{tag.label}</p>

                            </div>
                        </div>
                    }
                )
            }
        </>
    )
}