import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from '../features/blog'

const Detail = () => {
    const {id} = useParams();
    const {data:blogs} = useGetSingleBlogQuery(id);
  return (
    <div>
        <h1 className=" text-center text-4xl mt-5 underline underline-offset-8">
            Blogs details
        </h1>
        <div className=" flex justify-evenly mt-10">
        <img src={blogs?.image} className=' rounded-md shadow-lg w-[400px] h-[400px] object-cover' alt="" />
          <div className=" flex flex-col justify-between">
            <h1 className=' text-xl'>{blogs?.title}</h1>
            <p className=' text-xl'>{blogs?.decs}</p>
            <Link to={'/'}>
            <button className=' px-4 py-2 bg-slate-500 text-white rounded-md shadow'>Go Back</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Detail
