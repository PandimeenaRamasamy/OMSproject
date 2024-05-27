// src/components/PostDataForm.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postDataRequest } from '../Actions/PostDataAction';

const PostDataForm = () => {
    const [form, setForm] = useState({
        name: "",
        age: "",
        department: "",
        file: ""
    });

    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.postData);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setForm({ ...form, file: reader.result });
        };
        
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postDataRequest(form));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='py-2 px-2 border-pink-900 border-2'
                    placeholder='Name'
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type='text'
                    className='py-2 px-2 border-pink-900 border-2'
                    placeholder='Age'
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                />
                <input
                    type='text'
                    className='py-2 px-2 border-pink-900 border-2'
                    placeholder='Department'
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                />
                <input
                    type='file'
                    onChange={handleFileChange}
                />
                <button type='submit' className='py-2 px-4 bg-pink-500 text-white'>Submit</button>
            </form>
            {loading && <p>Loading...</p>}
            {data && (
                <div>
                    <h3>Data posted successfully:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default PostDataForm;
