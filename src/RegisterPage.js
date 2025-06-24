import './styles/RegisterPage.css'
function RegisterPage() {
 
  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
       
      /><br />
      <input
        type="password"
        placeholder="Password"
     
      /><br />
      <input
        type="confirm-password"
        placeholder="Confirm Password"
     
      /><br />
      <div class='register-btn'>
        <button >Register</button>
      </div>
      
      <button >Register</button>
    </div>
  );
}

export default RegisterPage;