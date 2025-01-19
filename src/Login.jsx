import {useState} from "react";
import React from "react";

let Login = () => {

    // create the first hook
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    return (


        <form>
            <fieldset>
                <legend>Legend</legend>

                <div>
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                           autoComplete="off" value={password} onChange={ (e) => setPassword(e.target.value)} />
                </div>
            </fieldset>
        </form>


    );
}

export default Login;