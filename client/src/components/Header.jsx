import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-dark vw-100'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top vw-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="navbar-brand text-light font-weight-bold" style={{ fontSize: '24px' }}>Job Fusion</div>
          <div className="d-flex">
            <ul className="navbar-nav d-flex flex-row mt-2 mt-lg-0">
              <li className="nav-item active mx-lg-3 mx-md-2">
                <Link className="nav-link text-light" to="/" style={{ transition: 'color 0.3s' }}>Home</Link>
              </li>
              <li className="nav-item active mx-lg-3 mx-md-2">
                <Link className="nav-link text-light" to="/about" style={{ transition: 'color 0.3s' }}>About</Link>
              </li>
            </ul>
          </div>
        </div>
        <style>
          {`
            .nav-link:hover {
              color: #FFD700 !important;
            }
            .navbar-brand:hover {
              text-shadow: 2px 2px 4px rgba(255, 215, 0, 0.7);
            }
            .navbar {
              overflow: hidden; /* Prevent horizontal overflow */
            }
            .container-fluid {
              padding: 0 15px; /* Add padding to prevent edge-to-edge content */
              max-width: 100%; /* Ensure container does not exceed viewport width */
            }
            .navbar-nav {
              margin: 0; /* Ensure no extra margins are causing overflow */
            }
          `}
        </style>
      </nav>
    </div>
  );
}

export default Header;



