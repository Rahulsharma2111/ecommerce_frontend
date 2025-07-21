import { useState } from "react";
import { useLocation } from 'react-router-dom';
import './RegisterUser.css';
export default function RegisterForm(props) {

    const location = useLocation();
    const { username, email, password } = location.state || {};

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: email || '',
        age: '',
        houseNumber: '',
        street: '',
        address: '',
        district: '',
        state: '',
        zipcode: '',
        username: username || '',
        password: password || '',
        block:false,
        role:'user'
    });
    function handleInputChange(e) {
        console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    function fromDataHandle(e) {
        // setFormData({
        //     ...formData,
        //     
        // })
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
            localStorage.setItem("userToken",JSON.stringify(response));
            if (response) {
                alert("add successfully");
            }
        }
        createUser();
    }
    return (
        <>
            <div className="bg-shape circle"></div>
            <div className="bg-shape square"></div>
            <div className="bg-shape triangle"></div>
            <div className="register-form-container">
                <div><h3>Register Or Sign Up</h3></div>
                <br />
                <div></div>
                <form onSubmit={fromDataHandle}>
                    <div className="form-group">
                        <label htmlFor="first_name">First name</label>
                        <input id="first_name" type="text" placeholder="Enter your first name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Last name</label>
                        <input id="last_name" type="text" placeholder="Enter your last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile_number">Mobile Number</label>
                        <input id="mobile_number" type="text" placeholder="Enter your mobile number"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input id="age" type="number" placeholder="Enter your age" min={18} max={120}
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="house_number">House Number</label>
                        <input id="house_number" type="text" placeholder="Enter your house number"
                            name="houseNumber"
                            value={formData.houseNumber}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" placeholder="street name"
                            name="street"
                            value={formData.street}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" placeholder="Enter address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="district">District</label>
                        <input id="district" type="text" placeholder="Enter district"
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input id="state" type="text" placeholder="Enter state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="zipcode">Pincode</label>
                        <input id="zipcode" type="number" placeholder="Enter pincode"
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        {/* */}
                        <button type="submit" >Submit</button>
                    </div>

                </form>


            </div>
        </>
    );
}