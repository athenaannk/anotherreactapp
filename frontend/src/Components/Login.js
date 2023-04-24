import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return (
<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="passsword" name="password"></input>

            <button type="submit">Log In</button>

        </form>
        <button>Don't have an account? Register Here!</button>

        </>
    )
}

export default Login