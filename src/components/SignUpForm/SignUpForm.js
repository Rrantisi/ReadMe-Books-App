import { useState } from 'react';
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({ setUser }){
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
    });

    const [error, setError] = useState('');

    function handleChange(event) {
        setFormInputs({ 
            ...formInputs, 
            [event.target.name]: event.target.value,
        });
        setError('');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = {...formInputs};
            delete formData.error;
            delete formData.confirm;

            const user = await signUp(formData);

            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    // const disabled = 

    return (
        <div>
        <div className="form-container">
          <form autoComplete='off' onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                value={formInputs.name}
                onChange={handleChange}
                required
              />
            <label>Email</label>
            <input 
                type="email" 
                name="email"
                value={formInputs.email}
                onChange={handleChange}
                required 
              />
            <label>Password</label>
            <input 
                type="password" 
                name="password"
                value={formInputs.password}
                onChange={handleChange}
                required
            />
            <label>Confirm</label>
            <input 
                type="password" 
                name="confirm"
                value={formInputs.confirm}
                onChange={handleChange}
                required
            />
            <button type="submit" disabled={formInputs.password !== formInputs.confirm}>Sign Up</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    )

}