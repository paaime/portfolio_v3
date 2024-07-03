export default function ArrowIcon({ color }: { color?: string }) {
  return (
    <div className="h-[20px] w-[20px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 18 18"
      >
        <path
          d="M 5.25 12.75 L 12.75 5.25"
          fill="transparent"
          strokeWidth="1.5"
          stroke={`${color === 'black' ? ' black' : 'hsl(0, 0%, 100%)'}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray=""
        ></path>
        <path
          d="M 5.25 5.25 L 12.75 5.25 L 12.75 12.75"
          fill="transparent"
          strokeWidth="1.5"
          stroke={`${color === 'black' ? ' black' : 'hsl(0, 0%, 100%)'}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray=""
        ></path>
      </svg>
    </div>
  );
}
