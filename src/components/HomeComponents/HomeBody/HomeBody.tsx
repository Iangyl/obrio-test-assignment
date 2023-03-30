import GenderButton from 'components/GenderButton/GenderButton';

import { Gender } from 'redux/user/user.types';

import styles from './HomeBody.module.sass';

const HomeBody = ({ onClick }: { onClick: (value: Gender) => void }) => (
  <div className={styles.homeBody}>
    <span>
      <GenderButton btnType="male" onClick={() => onClick('male')} />
    </span>
    <span>
      <GenderButton btnType="female" onClick={() => onClick('female')} />
    </span>
  </div>
);

export default HomeBody;
