import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {QuotesType} from '../../Interfaces/QuotesType'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        getQuotes: builder.query<QuotesType, void>({
            query:()=> '/quotes'
        })
    })
})

export const {
    useGetQuotesQuery
} = apiSlice