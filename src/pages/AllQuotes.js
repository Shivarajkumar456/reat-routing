import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

 const AllQuotes = () => {
    const DUMMY_QUOTES = [
        { id : 'q1' , author: "Max" , text:"Learing from Sharpener"},
        { id : 'q2' , author: "Shivaraj" , text:"Learing from Udemy"}

    ]
  return (
       <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes
