import './login.css';
import './App.css';

function Login() {
    return (
        <div className="login-container">
            <h1>Welcome!</h1>
            <h4>Please log in to continue</h4>
            <form onSubmit>
            <input type="text" placeholder="Account Name" className="login-input" /><br />
            <input type="password" placeholder="Password" className="login-input" /><br />
            <input type="button" value="Log In" className="login-button"/><br />
            </form>        
        </div>
    );
}

export default Login;
