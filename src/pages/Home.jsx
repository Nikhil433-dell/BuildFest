import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <h1 className={styles.greeting}>Welcome back, {user?.name}! 👋</h1>
        <p className={styles.email}>{user?.email}</p>
        <div className={styles.dashboard}>
          <h2>Your Dashboard</h2>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>✅</span>
              <span className={styles.statLabel}>Account Status</span>
              <span className={styles.statValue}>Active</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>🔐</span>
              <span className={styles.statLabel}>Authentication</span>
              <span className={styles.statValue}>Verified</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>🌐</span>
              <span className={styles.statLabel}>Session</span>
              <span className={styles.statValue}>Active</span>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
}
