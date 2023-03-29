const ZodiacSpan = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => (
  <span className={className} style={{ color: '#F2C94C' }}>
    {value}
  </span>
);

export default ZodiacSpan;
