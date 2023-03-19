import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getblog: builder.query({
      query: () => `/blogs`,
      providesTags :['blogApi']
    }),
    getSingleBlog: builder.query({
      query : (id) => `/blogs/${id}`
    }),
    getNewBlog: builder.mutation({
      query: (blog) => ({
        url : '/blogs',
        method : 'POST',
        body : blog
      }) ,
      invalidatesTags : ['blogApi']
    }),
    deleteBlog : builder.mutation({
      query : (id) => ({
        url : `/blogs/${id}` ,
        method : 'DELETE',
      }),
      invalidatesTags : ['blogApi']
    })
  })
})

export const {useGetblogQuery,useGetSingleBlogQuery,useGetNewBlogMutation,useDeleteBlogMutation} = blogApi