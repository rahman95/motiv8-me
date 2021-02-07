import { NowRequest, NowResponse } from '@vercel/node'

import quotes from '../quotes.json'

interface Quote {
    quote: string
    author: string
}

const getRandomQuote = (): Quote => {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

const handler = (request: NowRequest, response: NowResponse) => {
    const quote = getRandomQuote();

    response.status(200).json(quote)
}

export default handler