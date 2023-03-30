import { useLocation } from 'react-router-dom';
import styles from './Footer.module.sass';

const Footer = ({ theme }: { theme: 'dark' | 'light' }) => {
  const location = useLocation();
  return (
    <footer className="wrapper">
      <p className={`${styles.footerText} ${styles[theme]}`}>
        {location.pathname === '/'
          ? 'Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus'
          : 'Nicosia, Cyprus'}
      </p>
    </footer>
  );
};

export default Footer;
