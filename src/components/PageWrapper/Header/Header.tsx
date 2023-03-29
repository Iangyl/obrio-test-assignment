import ArrowIcon from 'assets/Arrow';
import LogoDarkIcon from 'assets/LogoDark';
import LogoLightIcon from 'assets/LogoLight';

import styles from './Header.module.sass';

const Header = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.arrowContainer}>
            <ArrowIcon
              className="clickable"
              fill={theme === 'dark' ? '#333333' : '#FAFAFA'}
            />
          </div>
          <div className={styles.logoContainer}>
            {theme === 'dark' ? <LogoDarkIcon /> : <LogoLightIcon />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
