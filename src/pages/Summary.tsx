import { useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';

import { emailRegex } from 'utils/constants';
import { setEmail } from 'redux/user/userSlice';
import { delay } from 'utils/helpers';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import SummaryBody from 'components/SummaryComponents/SummaryBody/SummaryBody';

export type Error = 'error' | 'success';

export interface IError {
  status: Error;
  text: string;
}

const Summary = () => {
  const dispatch = useAppDispatch();
  const [email, setEmailLocal] = useState<string>();
  const [error, setError] = useState<IError>({
    status: 'success',
    text: 'Invalid email',
  });

  const handleClick = () => {
    if (email) {
      dispatch(setEmail(email));
    }
  };

  const handleChange = async (value: string) => {
    await delay(3000);
    setEmailLocal(value.trim());
  };

  useEffect(() => {
    if (email) {
      if (emailRegex.test(email))
        setError({
          status: 'success',
          text: 'Invalid email',
        });
      else
        setError({
          status: 'error',
          text: 'Invalid email',
        });
    } else
      setError({
        status: 'success',
        text: 'Invalid email',
      });
  }, [email]);

  return (
    <PageWrapper theme="light">
      <SummaryBody
        onClick={handleClick}
        onChange={handleChange}
        error={error}
      />
    </PageWrapper>
  );
};

export default Summary;
