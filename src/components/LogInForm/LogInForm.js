import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function SignUpForm({ setUser }){
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    function handleChange(event) {
        setCredentials({ 
            ...credentials, 
            [event.target.name]: event.target.value,
        });
        setError('');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
        <div className="form-container">
          <form autoComplete='off' onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
                type="email" 
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required 
              />
            <label>Password</label>
            <input 
                type="password" 
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
            />
            <button className="submit" type="submit">Log In</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    )
}