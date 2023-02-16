import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

 const AllQuotes = () => {
    const DUMMY_QUOTES = [
        { id : 'q1' , author: "Yash" , text:"Learing from Sharpener"},
        { id : 'q2' , author: "Max" , text:"Learing from Udemy"}

    ]
  return (
       <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes
