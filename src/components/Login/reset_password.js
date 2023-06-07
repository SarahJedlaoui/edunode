import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from "../NavBar";
const ResetPasswordPage = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tokenValid, setTokenValid] = useState(false);

    useEffect(() => {
        // Call the API endpoint to validate the reset token
        // Pass the token to the API endpoint

        // Example implementation using axios:
        axios.post('https://edunode.herokuapp.com/api/password/validate-reset-token', { token })
            .then(response => {
                setTokenValid(response.data.tokenValid);
                console.log('valid token',response.data.tokenValid)
            })
            .catch(error => {
                console.error('Error validating reset token:', error);
            });

        // In the response, you'll receive a JSON object with the 'tokenValid' property indicating
        // whether the token is valid or not. Use the response data to set the 'tokenValid' state.
    }, [token]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the password and confirm password inputs
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }

        // Call the API endpoint to update the password
        // Pass the token and new password to the API endpoint


     axios.post(`https://edunode.herokuapp.com/api/password/reset-password/${token}`, { password })
            .then(response => {
                // Handle successful password reset
                console.log(response.data.message);
            })
            .catch(error => {
                // Handle error cases
                console.error('Error resetting password:', error);
            });
    };

   // if (!tokenValid) {
      //  return <p>Invalid or expired reset token.</p>;
   // }

    return (
        <div>
             <NavBar></NavBar>
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <input type="password" value={password} onChange={handlePasswordChange} required />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordPage;