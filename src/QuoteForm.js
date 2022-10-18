import React,{useState} from "react";
import {v4 as uuidv4} from 'uuid'

const QuoteForm=(props)=>{
    const {formSubmission,id:slNo,name:author,body:quote,handleToggle} = props
    const [id,setId] = useState(slNo?slNo:uuidv4())
    const [name,setName] = useState(author?author:'')
    const [body,setBody] = useState(quote?quote:'')

    const handleBodyChange=(e)=>{
        setBody(e.target.value)
    }

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id: id,
            name: name,
            body: body
        }
        formSubmission(formData)
        if(handleToggle){
            handleToggle()
        }

        setName('')
        setBody('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label> <br/>
                <input type= 'text' onChange={handleNameChange} value={name}/> <br/><br/>
                <label>Body:</label> <br/>
                <textarea placeholder="elaborate here" value={body} onChange={handleBodyChange} rows={5} cols={25}/><br/>
                <input type='submit' value="save"/>
            </form>
        </div>
    )
}

export default QuoteForm