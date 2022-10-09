import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApiSlice = createApi({
    reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
  }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
        query: (payload) => ({
            url: "/register",
            method: "post",
            body: payload,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }),
        invalidatesTags: ['auth'],
    })
  })
})

export const { signUpUser } = authApiSlice