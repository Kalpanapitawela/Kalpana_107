import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const naviagte = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                naviagte('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card p-3">
                        <h3 className="text-center font-weight-bold p-3 mb-2 bg-info text-dark">Recipe Hub</h3>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-3">
                        <div className="card-body">
                            <h2 className="text-center">Register</h2>

                            <form onSubmit={handleSubmit}>

                                <div className="form-group row ">
                                    <div className="col-4 ms-2 ">
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="col-4 p-2">
                                        <input type="text" className="form-control" id="username" placeholder="Enter Username" autoComplete="off" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-4 ms-2 ">
                                        <label htmlFor="email">Email address</label>
                                    </div>
                                    <div className="col-4 p-2">
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />

                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>

                                <div className="form-group row ">
                                    <div className="col-4 ms-2 ">
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="col-4 p-2">
                                        <input type="password" className="form-control" id="password" placeholder="Input Password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col align-self-end mb-3 mt-2">
                                    <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
                                </div>

                                <div className="row mt-3">
                                    <p>If you already have an account</p></div>
                                <Link to={"/Login"} className="btn-btn-default p-2 border w-100 bg-light rounded-2 text-decoration-none">
                                    Sign in
                                </Link>

                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
export default Signup;