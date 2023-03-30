import Button from 'components/Button/Button';

import styles from './ProfileBottom.module.sass';

const ProfileBottom = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={styles.profileBottom}>
      <Button btnType="gradient" className={styles.button} onClick={onClick}>
        Next
      </Button>
    </div>
  );
};

export default ProfileBottom;
