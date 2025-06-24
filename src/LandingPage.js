import { useNavigate } from 'react-router-dom';
import './styles/LandingPage.css'

function LandingPage() {

  const navigate = useNavigate();
 
  return (
    <div className="landing-container">
    <h2 className="title">Landing Page</h2>
    <div className="tab-header">
      <button className="active" onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
    </div>
  );
}

export default LandingPage;