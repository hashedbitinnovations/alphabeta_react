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
                <Link to='/input' className="mx-3">Input</Link>
                <Link to='/form' className="mx-3">Form</Link>
                <Link to='/classcomp' className="mx-3">ClassComp</Link>
                <Link to='/emi' className="mx-3">EMI</Link>
                <Link to='/formref' className="mx-3">FormRef</Link>
                <Link to='/hoccountry' className="mx-3">HOC Country</Link>
                <Link to='/hocstate' className="mx-3">HOC State</Link>
                <Link to='/hookreducer' className="mx-3">HookReducer</Link>
                <Link to='/hookmemo' className="mx-3">HookMemo</Link>
                <Link to='/hookcallback' className="mx-3">HookCallback</Link>

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