import { memo, SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="6"
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 6L0.803848 0L11.1962 0L6 6Z" fill="#333333" />
  </svg>
);

const DropArrowIcon = memo(SVGComponent);
export default DropArrowIcon;
