import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
    return (
        <>
            <div className="row bg-warning bg-opacity-25">
                <div className="col-12">

                <Link to='/about' className="mx-3">About</Link>
                <Link to='/services' className="mx-3">Services</Link>
                <Link to='/blog' className="mx-3">Blog</Link>
                <Link to='/contact' className="mx-3">Contact</Link>
                <Link to='/ipltable' className="mx-3">IPL Table API</Link>

                    {/* <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/about'>About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/services'>Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/blog'>Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contact'>Contact</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav> */}
                </div>
            </div>

        </>
    )
}

export default Menubar;