import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const LogIn = () => {
    
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        // console.log(form.get('email'));
        // console.log(form.get('password'));

        signIn(email, password)
        .then(result => {
            console.log(result.user);

            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center mb-4'>Do Not Have An Account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;