import { getZodiacSign } from 'utils/helpers';

import ZodiacSpan from 'components/ZodiacSpan/ZodiacSpan';

import styles from './ConclusionHead.module.sass';
import { useAppSelector } from 'redux/hooks';
import { useMemo } from 'react';
import CognitiveScaleIcon from 'assets/CognitiveScale';
import EmotionalScaleIcon from 'assets/EmotionalScale';
import BalancedScaleIcon from 'assets/BalancedScale';

const ConclusionHead = () => {
  const decisionCenter = useAppSelector(
    (state) => state.details?.decision_center
  );
  const birthday = useAppSelector((state) => state.birthday);

  const zodiacSign = useMemo(
    () => getZodiacSign(birthday ?? new Date().toString()),
    [birthday, decisionCenter]
  );

  return (
    <div className={styles.conclusionHead}>
      <div>
        {decisionCenter === 'head' ? (
          <CognitiveScaleIcon />
        ) : decisionCenter === 'heart' ? (
          <EmotionalScaleIcon />
        ) : (
          <BalancedScaleIcon />
        )}
      </div>
      {decisionCenter === 'head' ? (
        <p className={styles.paragraph}>
          Based on our data, 39% of <ZodiacSpan value={zodiacSign} /> people
          also make decisions with their head. But don&apos;t worry, we&apos;ll
          consider that while creating your guidance plan.
        </p>
      ) : decisionCenter === 'heart' ? (
        <p className={styles.paragraph}>
          Based on our data, 49% of <ZodiacSpan value={zodiacSign} /> people
          also make decisions with their heart. But don&apos;t worry, we&apos;ll
          consider that while creating your guidance plan.
        </p>
      ) : (
        <p className={styles.paragraph}>
          Wonderful! Based on our data, only the top 17% of{' '}
          <ZodiacSpan value={zodiacSign} /> people make decisions with their
          heart and head. Using both in equal measure is the key to feeling
          harmonious in your relationships.
        </p>
      )}
    </div>
  );
};

export default ConclusionHead;
