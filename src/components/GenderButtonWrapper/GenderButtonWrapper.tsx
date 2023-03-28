import React from 'react';
// this wrapper should be button and GenderButton I should change to simple div
const GenderButtonWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => <div>{children}</div>;

export default GenderButtonWrapper;
