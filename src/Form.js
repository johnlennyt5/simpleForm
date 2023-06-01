import { useState } from "react"
import React from 'react'

function Form() {
    const[formData, setFormData]=useState({
        firstName: '',
        lastName: '',
        email: ""
    })
    const [submitted, setSubmitted]= useState(false)

    function handleChange(e){
        setFormData((prevData)=>{
            return({...prevData,
            [e.target.name]: e.target.value })
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        setSubmitted(true)
    }
  return (
    <div>
     <main>
          <form onSubmit={handleSubmit}>
             <input 
                type='text'
                placeholder='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required/>
             <input 
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required/>
            <input 
                type='email'
                placeholder='Enter Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required/>
             <button type="submit">Submit</button>
             {submitted && (<h1>Welcome {formData.firstName} {formData.lastName}!</h1>)}
            </form>
        </main>
    </div>
  )
}

export default Form