import './AuthPage.css';
import { useState } from 'react';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';
import Main from '../../pages/Main/Main';

export default function AuthPage({ setUser }) {
    const [userStatus, setUserStatus] = useState(false);

    return (
      <main>
        <div className="AuthPage">
            <div className="logo-section">
                <Main />
                {/* <p className="intro">Acquire knowledge and embrace the convenience and flexibility of learning and reading on-the-go.</p>
                <p className="intro">Start your digital reading journey today with our ReadMe website.</p> */}
                &nbsp; &nbsp;
                <h3>Join ReadMe Today!</h3>
            </div>
            <div className="auth-section">
                {userStatus ? (
                <>
                    <h2>Log In</h2>
                    <LogInForm setUser={setUser} />
                    <h3>Not a User?</h3>
                    <button onClick={() => setUserStatus(!userStatus)}>
                        Sign Up
                    </button>
                </>
                ) : (
                <>
                    <h2>Sign Up</h2>
                    <SignUpForm setUser={setUser} />
                    <h3>Already a User?</h3>
                    <button onClick={() => setUserStatus(!userStatus)}>
                        Log In
                    </button>
                </>
                )}
            </div>
        </div>
      </main>
    );
  }