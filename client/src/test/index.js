import { useState, useEffect } from 'react'
import React from 'react'

import Axios from 'axios'
import '././index.css';

export default function thien() {

    const [TitleName, setTitleName] = useState("")
    const [Content, setContent] = useState("")
    const [title, settitle] = useState("")
    const [NewUpdate, setNewUpdate] = useState("")


    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((res) => {
            setListPost(res.data);
        });
    }, []);

    const [ListPost, setListPost] = useState([]);

    const addToList = () => {
        Axios.post("http://localhost:3001/insert", {
            TitleName: TitleName, Content: Content, title: title,
        });
    }
    return (
        <div className="App">
            <h1> CRUD App with MERN</h1>

            <label>TitleName</label>
            <input type="text"
                onChange={(event) => {
                    setTitleName(event.target.value);
                }} />

            <label>Content</label>
            <input type="text"
                onChange={(event) => {
                    setContent(event.target.value);
                }} />

            <label>title</label>
            <input type="text"
                onChange={(event) => {
                    settitle(event.target.value);
                }} />

            <button onClick={addToList}>Add to List</button>

            <h1>Show list post</h1>

            {ListPost.map((val, key) => {
                return (
                    <div key={key} className='IsValue'>
                        <p>Tên bài viết: {val.TitleName}</p>
                        <p>Nội dung: {val.Content}</p>
                        <p>Tiêu đề: {val.title}</p>

                        <button>Delete</button>

                        <div>
                            <input type="text" onChange={(event) => {
                                setContent(event.target.value)
                            }} />
                            <button>Update</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

