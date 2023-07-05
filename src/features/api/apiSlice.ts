import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {QuotesType as QuotesResponse} from '../../Interfaces/QuotesType'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Quotes'],
    endpoints: (builder) => ({
        getQuotes: builder.query<QuotesResponse, void>({
            query:()=> '/quotes',
            providesTags: (['Quotes'])
        }),
        upvoteQuote: builder.mutation<void, string>({
            query: (id) => ({
                url: `/quotes/${id}/upvote`,
                method: 'POST'
              }),
            invalidatesTags: ['Quotes']
        }),
        upvoteQuoteDelete: builder.mutation<void, string>({
            query: (id) => ({
                url: `/quotes/${id}/upvote`,
                method: 'DELETE'
              }),
            invalidatesTags: ['Quotes']
        }),
        downvoteQuote: builder.mutation<void, string>({
            query: (id) => ({
                url: `/quotes/${id}/downvote`,
                method: 'POST'
              }),
            invalidatesTags: ['Quotes']
        }),
        downvoteQuoteDelete: builder.mutation<void, string>({
            query: (id) => ({
                url: `/quotes/${id}/downvote`,
                method: 'DELETE'
              }),
            invalidatesTags: ['Quotes']
        }),
        // addQuote: builder.mutation<QuotesResponse, void>({
        //     query:(quote)=> ({
        //         url:'quotes',
        //         method: 'Post',
        //         body: quote
        //     }),
        //     invalidatesTags: ['Quotes']
        // })
        
    })
})

export const {
    useGetQuotesQuery, useUpvoteQuoteMutation,useUpvoteQuoteDeleteMutation, useDownvoteQuoteMutation, useDownvoteQuoteDeleteMutation
} = apiSlice