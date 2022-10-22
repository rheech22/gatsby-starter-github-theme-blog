const ArrowThin = (props: any) => (
  <svg
    aria-hidden="true"
    role="img"
    className="octicon octicon-chevron-up"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="currentColor"
    style={{
      display: 'inline-block',
      userSelect: 'none',
      verticalAlign: 'text-bottom',
      overflow: 'visible',
    }}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"
    />
  </svg>
);

export default ArrowThin;
