import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Signup.css';


function SignUp() {
    const [login, setlogin] = useState(true);
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

    function loginHandle(e) {
        e.preventDefault();
        const loginApi = async () => {
            const loginParam = new URLSearchParams({
                username: username,
                password: password
            })
            const url = `http://localhost:8080/auth/login?${loginParam}`;
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(loginData),
            });
            response = await response.json();
              localStorage.setItem("userToken",JSON.stringify(response.token));
              localStorage.setItem("userId",JSON.stringify(response.user_id));
              localStorage.setItem("user",JSON.stringify(response.user));
            if (response) {
                alert("login successfully");
            }
        }
        loginApi();
    }
    return (
        <>
            <div className="auth-container">
                <button onClick={() => setlogin(true)} className="auth-btn login-btn">login</button><br />
                <button onClick={() => setlogin(false)} className="auth-btn signup-btn">signup</button>
            </div>

            {login ? (
                <div className="signup-container">
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" placeholder="Enter username"
                            name="username"
                            onChange={handleUsername} />
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
                    <button onClick={loginHandle}>Login</button>

                </div>
            ) : (
                <div className="signup-container">
                    <h1>Sign up</h1>
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
            )}



        </>
    );
}

export default SignUp;