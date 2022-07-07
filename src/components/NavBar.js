import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '200px', 
    padding: '20px', 
    margin: '0 10px 10px', 
    background: 'blue', 
    textDecoration: 'none', 
    color: 'white'
}

function NavBar() {
    
        return (
            <div>
                <NavLink
                    to="/" 
                    exact
                    style={link}
                    activeStyle={{
                        background: 'purple'
                    }}
                
                >
                    Home
                </NavLink>
                <NavLink
                    to="/commentform" 
                    exact
                    style={link}
                    activeStyle={{
                        background: 'purple'
                    }}
                
                >
                    Comment Form
                </NavLink>
                <NavLink
                    to="/commentlist" 
                    exact
                    style={link}
                    activeStyle={{
                        background: 'purple'
                    }}
                
                >
                    Comments
                </NavLink>
            </div>
        )
   
}

export default NavBar;
