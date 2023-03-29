import styles from './HomeFooter.module.sass';

const PRIVACY_POLICY = 'https://asknebula.com/app/privacy-policy';
const TERM_OF_USES = 'https://asknebula.com/app/terms';

const HomeFooter = () => (
  <div className={styles.homeFooter}>
    <p>
      By continuing I agree with{' '}
      <a onClick={() => window.open(PRIVACY_POLICY, '_blank')}>
        Privacy policy
      </a>{' '}
      and{' '}
      <a onClick={() => window.open(TERM_OF_USES, '_blank')}>Terms of uses</a>.
    </p>
  </div>
);

export default HomeFooter;
