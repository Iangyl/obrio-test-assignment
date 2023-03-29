import TimeInput from 'components/TimeInput/TimeInput';

import styles from './ProfileBody.module.sass';

const ProfileBody = () => {
  return (
    <div className={styles.profileBody}>
      <TimeInput onChange={console.log} />
    </div>
  );
};

export default ProfileBody;
