import React, { useState } from 'react'
import useFormData from '../hooks/useFormData';
import IntArray from '../data/IntArray';
import { useForm } from 'react-hook-form';

function FormFetch() {

    const [state, handleSubmit] = useFormData()

    const onAdd = (e) => {
        e.preventDefault()
        console.log(state)
    }

    
    return (
        <>
            <form onSubmit={(e) => onAdd(e)}>

                <label>Name</label>
                <input placeholder='NAME' value={state.name || ''} name="name" onChange={handleSubmit} />
                <br /><br />

                <label>Email</label>
                <input placeholder='EMAIL' value={state.email || ''} name="email" onChange={handleSubmit} />
                <br /><br />

                <label>Phone Number</label>
                <input placeholder='PHONE NUMBER' value={state.phonenumber || ''} name="phonenumber" onChange={handleSubmit} />
                <br /><br />

                <button>Submit</button>
            </form>
        </>
    )
}

export default FormFetch
