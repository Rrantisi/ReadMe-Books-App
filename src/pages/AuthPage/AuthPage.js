import './AuthPage.css';
import { useState } from 'react';

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import logo from '../../components/Nav/logo.png'

export default function AuthPage({ setUser }) {
    const [userStatus, setUserStatus] = useState(false);

    return (
      <main>
        <div className="AuthPage">
            <div className="logo-section">
                <h1>ReadMe</h1>
                <img src={logo} alt="Logo"/>
                <p>ReadMe is an online ebook library that helps you search and access digital copies of books</p>
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