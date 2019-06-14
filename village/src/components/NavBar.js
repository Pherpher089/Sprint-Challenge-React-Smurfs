import React from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component{
    
    render(){
        return(
        <div className='NavBar'>
            <NavLink to='/'>Smurf List</NavLink>
            <NavLink to='/smurf-form'>Add Smurf</NavLink>
        </div>
        )
        
    }
}