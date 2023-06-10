import React, { Component } from 'react'
import { MenuItems } from './Menuitems'
import './navbar.css'
import { Link } from 'react-router-dom';
class Navbar extends Component {
    // initialized var to store state false
    state = { clicked: false };

    //button handling the div of menu bar - hamburger icon
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <div className='navbar-items'>
                <h1 className='navbar-logo'>Trippy</h1>

                {/* using onclick function in div to show menus for responsive material */}
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>


                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url} >
                                    <i className={item.icon}>{item.title}</i>
                                </Link>
                            </li>
                        )
                    }
                    )
                    }
                    <button>Sign UP</button>
                </ul>
            </div>
        )
    }
}

export default Navbar 