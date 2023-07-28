// import styles from '../assets/MyComponent.module.css';
import styles from './MyComponent.module.css';

const MyComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.red}>Hello, world!</h1>
        <h1 className={styles.myClass}>MY Class</h1>
      </div>
    </>
  );
};

export default MyComponent;
