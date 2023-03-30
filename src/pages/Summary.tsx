import PageWrapper from 'components/PageWrapper/PageWrapper';
import SummaryBody from 'components/SummaryComponents/SummaryBody/SummaryBody';
import { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { setEmail } from 'redux/user/userSlice';

const Summary = () => {
  const dispatch = useAppDispatch();
  const [email, setEmailLocal] = useState<string>();

  const handleClick = () => {
    if (email) {
      dispatch(setEmail(email));
    }
  };

  const handleChange = (value: string) => {
    setEmailLocal(value);
  };

  return (
    <PageWrapper theme="light">
      <SummaryBody onClick={handleClick} onChange={handleChange} />
    </PageWrapper>
  );
};

export default Summary;
