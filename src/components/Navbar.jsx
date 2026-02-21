import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link to="/">AuthApp</Link>
      </div>
      <ul className={styles.navLinks}>
        {user ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><span className={styles.userEmail}>{user.email}</span></li>
            <li>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
