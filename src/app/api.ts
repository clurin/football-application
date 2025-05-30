import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_LINK,
})

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: (builder) => ({})
})
