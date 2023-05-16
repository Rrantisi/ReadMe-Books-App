import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LogInForm from "../../components/LogInForm/LogInForm"

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>Auth Page</h1>
            <SignUpForm setUser={setUser} />
            <LogInForm setUser={setUser} />
        </main>
    )
}