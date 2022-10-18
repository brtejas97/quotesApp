import React from "react";
import QuotesItem from "./QuotesItem";

const QuotesList=(props)=>{
    const {quotes,removeItem,editItem} = props

    return(
        <div>
            {
                quotes.length===0 ? (
                    <div> 
                        <h2>No records</h2>
                        <h3>Add your first quote now</h3>
                    </div>
                ) : (
                    <div> 
                        <h2>Quotes - {quotes.length}</h2>
                        {
                            quotes.map((quote)=>{
                                return <QuotesItem key={quote.id} {...quote} removeItem={removeItem} editItem={editItem} />
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default QuotesList