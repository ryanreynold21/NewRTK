import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetNewBlogMutation } from '../features/blog'

const Create = () => {
    const [title,setTitle] = useState('');
    const [decs,setDecs] = useState('');
    const [image,setImage] = useState('');
    const navigate = useNavigate();
    const [getNewBlog] = useGetNewBlogMutation();
    const submitHandler = (e) => {
        e.preventDefault();
        const newBlog = {
            id:Math.floor(Math.random() * 100),
            title,
            decs,
            image
        }
        getNewBlog(newBlog);
        navigate('/')
    }
  return (
    <div className=' flex justify-center h-screen items-center'>
        <form action="" onSubmit={submitHandler}>
            <h1 className=' text-2xl my-2 text-orange-800'>Create Your Blogs</h1>
            <div className="">
                <input 
                required
                type="text"
                 placeholder=' title...'
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                  className=' border border-b-4 border-cyan-700 outline-none p-2 mb-6 ' />
            </div>
            <div className="">
                <input 
                required
                type="text"
                 placeholder=' decs...' 
                 value={decs}
                 onChange={e => setDecs(e.target.value)}
                 className=' border border-b-4 border-cyan-700 outline-none p-2 mb-6 ' />
            </div>
            <div className="">
                <input 
                required
                type="text"
                 placeholder=' image...'
                 value={image}
                 onChange={e => setImage(e.target.value)}
                  className=' border border-b-4 border-cyan-700 outline-none p-2 mb-6 ' />
            </div>
            <button type='submit' className=' px-4 py-2 bg-cyan-600 text-white'>Create</button>
        </form>
    </div>
  )
}

export default Create
