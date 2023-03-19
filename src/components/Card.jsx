import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../features/blog'

const Card = ({item}) => {
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className=' p-2 border border-gray-400 rounded-md shadow-lg'>
      <img src={item.image} className=' w-[200px] h-[200px] object-cover rounded-md' alt="" />
      <h1>{item.title}</h1>
      <p>{item.decs}</p>
      <Link to={`/detail/${item.id}`}>
      <button className=' ml-2 my-3 px-4 py-2 bg-gray-700 text-white rounded-md shadow-md'>Detail</button>
      </Link>
      <button onClick={() => deleteBlog(item?.id)} className=' ml-2 my-3 px-4 py-2 bg-rose-500 text-white rounded-md shadow-md'>Delete</button>
    </div>
  )
}

export default Card
