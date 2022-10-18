import React, {useState,useEffect} from "react";
import QuotesList from './QuotesList'
// import QuoteForm from "./QuoteForm";
import AddQuote from "./AddQuote";

const QuotesContainer=(props)=>{
    const [quotes,setQuotes] = useState([])

    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])

    const addItem=(quote)=>{
        const result= [quote,...quotes]
        setQuotes(result)
    }

    const removeItem=(id)=>{
        const result = quotes.filter((quote)=>{
            return quote.id!==id
        })
        setQuotes(result)
    }

    const editItem=(quote)=>{
        const result=quotes.map((q)=>{
            if(q.id===quote.id){
                return {...q,...quote}
            }
            else{
                return {...q}
            }
        })
        setQuotes(result)
        // console.log('edit data',quote)
    }

    return(
        <div>
            <QuotesList quotes={quotes} editItem={editItem} removeItem={removeItem}/>
            <AddQuote addItem={addItem}/>
        </div>
    )
}

export default QuotesContainer