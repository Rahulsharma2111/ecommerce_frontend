import { useState } from "react";

function Register() {
    return (
        <>
            <center>
                <div><h3>Register Or Sign Up</h3></div>
                <RegisterForm></RegisterForm>

            </center>
        </>
    );
}
export default Register;



export function RegisterForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        age: '',
        houseNumber: '',
        street: '',
        address: '',
        district: '',
        state: '',
        zipcode: '',
        username: '',
        password: ''
    });
    function handleInputChange(e) {
        console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    function fromDataHandle(e) {
        e.preventDefault();
        console.log(formData);

        const createUser = async () => {
            const url = "http://localhost:8080/auth/register";
            let response = await fetch(url, {
                method: 'POST',
                 headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            response = await response.json();
            if (response) {
                alert("add successfully");
            }
        }
        createUser();
    }
    return (
        <>
            <center>
                <form onSubmit={fromDataHandle}>
                    <div>
                        <label htmlFor="first_name">First name</label>
                        <input id="first_name" type="text" placeholder="Enter your first name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="last_name">Last name</label>
                        <input id="last_name" type="text" placeholder="Enter your last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="mobile_number">Mobile Number</label>
                        <input id="mobile_number" type="text" placeholder="Enter your mobile number"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="text" placeholder="Enter your email id"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="age">Age</label>
                        <input id="age" type="number" placeholder="Enter your age" min={18} max={120}
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="house_number">House Number</label>
                        <input id="house_number" type="text" placeholder="Enter your house number"
                            name="houseNumber"
                            value={formData.houseNumber}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" placeholder="street name"
                            name="street"
                            value={formData.street}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" placeholder="Enter address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="district">District</label>
                        <input id="district" type="text" placeholder="Enter district"
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <input id="state" type="text" placeholder="Enter state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="zipcode">Pincode</label>
                        <input id="zipcode" type="number" placeholder="Enter pincode"
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" placeholder="Enter username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" placeholder="Enter strong password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        {/* */}
                        <button type="submit" >Submit</button>
                    </div>

                </form>


            </center>
        </>
    );
}