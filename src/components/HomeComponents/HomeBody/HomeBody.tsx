import GenderButton from 'components/GenderButton/GenderButton';

import styles from './HomeBody.module.sass';

const HomeBody = () => (
  <div className={styles.homeBody}>
    <span>
      <GenderButton btnType="male" />
    </span>
    <span>
      <GenderButton btnType="female" />
    </span>
  </div>
);

export default HomeBody;
