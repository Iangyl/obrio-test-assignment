import Button from 'components/Button/Button';

import styles from './ProfileBottom.module.sass';

const ProfileBottom = () => {
  return (
    <div className={styles.profileBottom}>
      <Button btnType="gradient" className={styles.button}>
        Next
      </Button>
    </div>
  );
};

export default ProfileBottom;
