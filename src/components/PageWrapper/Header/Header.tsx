import { useLocation, useNavigate } from 'react-router-dom';

import { APP_ROUTES } from 'utils/constants';

import ArrowIcon from 'assets/Arrow';
import LogoDarkIcon from 'assets/LogoDark';
import LogoLightIcon from 'assets/LogoLight';

import styles from './Header.module.sass';

const Header = ({ theme }: { theme: 'light' | 'dark' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.content}>
          {location.pathname !== APP_ROUTES.HOME && (
            <div className={styles.arrowContainer} onClick={() => navigate(-1)}>
              <ArrowIcon
                className="clickable"
                fill={theme === 'dark' ? '#333333' : '#FAFAFA'}
              />
            </div>
          )}
          <div className={styles.logoContainer}>
            {theme === 'dark' ? <LogoDarkIcon /> : <LogoLightIcon />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
