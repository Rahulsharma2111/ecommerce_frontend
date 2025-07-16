import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Signup.css';


function SignUp() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    function handleUsername(e) {
        console.log(e.target.value);
        setUsername(e.target.value);
    }
    function handleEmail(e) {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    function registerPageRedirect() {      
        navigate('/register', { state: { username, email, password } });
    }

    return (
        <>
            <div className="signup-container">
            <h3>Sign up</h3>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Enter username"
                        name="username"
                        onChange={handleUsername} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">E-mail </label>
                    <input id="email" type="text" placeholder="Enter your email id"
                        name="email"
                        onChange={handleEmail}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password </label>
                    <input id="password" type="text" placeholder="Enter strong password"
                        name="password"
                        onChange={handlePassword}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="confirmPassword">Confirm Password </label>
                    <input id="confirmPassword" type="text" placeholder="Enter confirm password"
                        name="confirmPassword"
                    />
                </div>
                <br />
                <button onClick={registerPageRedirect}>Submit</button>

            </div>
        </>
    );
}

export default SignUp;