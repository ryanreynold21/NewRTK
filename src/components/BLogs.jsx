import React from 'react'
import { Link } from 'react-router-dom'
import { useGetblogQuery } from '../features/blog'
import Card from './Card'

const BLogs = () => {
    const {data:blogs} = useGetblogQuery();
  return (
    <div>
      <h1 className=' text-3xl text-center my-5 px-4 py-2 shadow-md font-bold tracking-wider'>AKW-Blogs</h1>
      <div className=" flex flex-wrap gap-10">
        {blogs?.map(item => <Card key={item.id} item={item} /> )}
      </div>
      <div className=" my-6 flex justify-center">
        <Link to={'/create'}>
        <button className=' px-4 py-2 bg-cyan-600 text-white '>Create blog</button>
        </Link>
      </div>
    </div>
  )
}

export default BLogs
