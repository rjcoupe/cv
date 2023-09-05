import Experience from '../experience';
import Profile from '../profile';
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.container}>
        <div><h1>About</h1></div>
        <Profile />
        <div><h1>Experience</h1></div>
        <Experience />
    </div>
  );
}

export default App;
