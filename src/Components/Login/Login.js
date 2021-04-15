import React from 'react';
import Navigation from '../Common/Navigation/Navigation';
import './Login.css';
import { FaGoogle} from 'react-icons/fa';

// onClick={handleGoogleLogin}

const Login = () => {
    return (
        <div>
            <Navigation></Navigation>
            
            <div className="login">
                <h1> Login With Google</h1>
                <button variant="outline-dark"> <FaGoogle /> Continue With Google  </button>
            </div>

        </div>
    );
};

export default Login;