import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const naviagte = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    naviagte('/home')
                }
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
                    <div className="card w-100 h-100 text-center p-3 ">
                        <div className="card-body">
                            <h2 className="text-center"> Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group row mb-3">
                                    <div className="col-4 ms-2 p-2 ">
                                        <label htmlFor="email">Email address</label>
                                    </div>
                                    <div className="col-4 ms-2 ">
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <div className="col-4 ms-2 p-2">
                                        <label htmlFor="password">Password</label>
                                    </div><div className="col-4 ms-2 ">
                                        <input type="password" className="form-control" id="password" placeholder="Input Password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mb-2">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;