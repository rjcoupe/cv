import Experience from '../experience';
import Profile from '../profile';
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <div>
        <div><h1>About</h1></div>
        <div><h1>Experience</h1></div>
      </div>
      <div>
        <Profile />
        <Experience />
      </div>
    </div>
  );
}

export default App;
