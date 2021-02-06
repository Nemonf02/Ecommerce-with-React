import React from "react";
import "./nav.scss";
import "./nav.scss";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function Navegation(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="header__wrapper navbar-brand">
           
            </div>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav header__nav-list">
                    <li className="nav-item">
                        <Link to="/" className="header__nav-button nav-link btn btn-success">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="header__nav-button nav-link btn btn-success">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="header__nav-button nav-link btn btn-success">Contact</Link>
                    </li>
                </ul>
                {props.location.pathname === '/products' &&
                    <form onSubmit={event => event.preventDefault()} className="form-inline my-2 my-lg-0 search-bar">
                        <input className="input-space" type="text" onChange={event => props.nameFilter(event)} placeholder="Search for names.." title="Type in a name" />
                        <select className="selectChanges" onChange={e => props.dropboxChange(e)}>
                            <option value="All">All</option>
                            <option value="Mens">Male</option>
                            <option value="Women">Female</option>
                            <option value="lessthan1000">Less than $1000</option>
                            <option value="morethan1000">More than $1000</option>
                        </select>
                        
                    </form>
                }
            </div>
        </nav>

    );
}

export default withRouter(Navegation);