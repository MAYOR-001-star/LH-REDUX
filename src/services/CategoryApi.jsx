import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ``,
    }),
  }),
})


export const { useGetCategoryQuery } = categoryApi