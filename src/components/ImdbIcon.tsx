export default function IMDbIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 48"
      {...props}
    >
      <rect width="128" height="48" fill="#F5C518" rx="4" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="18"
        fill="#000"
      >
        IMDb
      </text>
    </svg>
  )
}