import { useNavigate } from 'react-router-dom';
import './styles/LandingPage.css'

function LandingPage() {

  const navigate = useNavigate();
 
  return (
    <div className="body">
      <div className="header">
        <div className="header-left">
            <div className="p">Landing Page</div>
        </div>
        <div className="header-right">
          <button className="landing-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="landing-btn" onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
      <div className="landing-container">
        <h2 className="title">Landing Page</h2>
      </div>
    </div>
  );
}

export default LandingPage;