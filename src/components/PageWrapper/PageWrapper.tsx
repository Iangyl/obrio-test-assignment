import { FC } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import { IPageWrapper } from './PageWrapper.types';

import styles from './PageWrapper.module.sass';

const PageWrapper: FC<IPageWrapper> = ({ children, theme }) => {
  return (
    <main className={`${styles.pageWrapper} ${styles[theme]}`}>
      <Header theme={theme === 'light' ? 'dark' : 'light'} />
      <section className="wrapper" style={{ minHeight: 570 }}>
        {children}
      </section>
      <Footer theme={theme} />
    </main>
  );
};

export default PageWrapper;
