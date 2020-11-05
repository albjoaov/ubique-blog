import styles from './index.module.css';
import {Navbar} from './../components/navbar/Navbar';

export default function Index() {
  return (
    <>
    <main className={styles.mainContent}>
     <Navbar></Navbar>
    </main>
    </>
  );
}
