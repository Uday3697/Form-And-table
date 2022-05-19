import React, { useState } from 'react';
import axios from 'axios';
import './CreateData.css'

export default () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');


    const onSubmit = async (event) => {
        // event.preventDefault(); if dont want to auto refresh (needs refresh to update table data)

        await axios.post('http://localhost:4000/data', {name, age, gender, dob});

        setName('');
        setAge('');
        setGender('');
        setDob('');
    }
    return (
        <div className='formContainer'>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name</label>
                    <input value={name} type="text" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Age</label>
                    <input value={age} type="number" onChange={e => setAge(e.target.value)}/>
                </div>
                <div>
                    <label>DOB  </label>
                    <input value={dob} type="date" onChange={e => setDob(e.target.value)} />
                </div>
                
                <div>
                    <label> Gender</label>
                    <select name="gender "  value= {gender} onChange={e => setGender(e.target.value)} >
                    <option value="none" selected>Gender </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                </select>
                </div>
                <button> Submit </button>
            </form>
        </div>
    )
}