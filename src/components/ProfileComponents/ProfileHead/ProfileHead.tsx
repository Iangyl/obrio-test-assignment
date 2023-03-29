import styles from './ProfileHead.module.sass';

const ProfileHead = () => (
  <div className={styles.profileHead}>
    <p className={styles.paragraph}>Your profile</p>
    <h1 className={styles.title}>What time were you born?</h1>
    <h5 className={styles.subtitle}>
      We use NASA data to identify the exact position of the planets in the sky
      at the time of your birth.
    </h5>
  </div>
);

export default ProfileHead;
