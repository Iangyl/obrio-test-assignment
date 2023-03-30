import TimeInput from 'components/TimeInput/TimeInput';

import styles from './ProfileBody.module.sass';

const ProfileBody = ({ onChange }: { onChange: (value: Date) => void }) => {
  return (
    <div className={styles.profileBody}>
      <TimeInput onChange={onChange} />
    </div>
  );
};

export default ProfileBody;
