import React from 'react';
import {Link} from "react-router-dom";
import {FAVORITES} from "../constants";
import CategoryService from "../services/CategoryService";

const Header = () => {
    const categories = CategoryService.getCategories();
    return (
        <header className="sticky-top mb-2 bg-primary">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="basicExampleNav">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={FAVORITES}>Favorites</Link>
                        </li>
                        {categories && categories.map((category, i) => (
                            <li key={i} className="nav-item">
                                <Link className="nav-link" to={`/category/${category.toLowerCase()}`}>{category}</Link>
                            </li>
                        ))}
                    </ul>

                    <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                   aria-label="Search"/>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default Header;