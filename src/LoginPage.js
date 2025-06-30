import './styles/LoginPage.css'

function LoginPage() {
 
  return (
    <div className="body">
      <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  </div>
  );
}

export default LoginPage;