export type QuoteType = {
    id: string, 
    content: string, 
    author: string, 
    tags: string[], 
    userId: string, 
    upvotesCount: number, 
    downvotesCount: number, 
    createtAt: string, 
    givenVote: string
} 

export interface QuotesType {
    quotesCount: number,
    quotes: QuoteType[]
}