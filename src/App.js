import React from 'react';
import CreateData from './CreateData';
import ListData from './ListData';
import './App.css'

export default () => {
 return <div className='appdiv'>
     <h1 style={{color:"red"}}> Form </h1>
     < CreateData />
     <hr/>
     <h2 style={{color:"red"}}> Table </h2>
     <ListData/>
 </div>    
}