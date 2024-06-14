import * as React from "react"
const CrossIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 8-8 8m4-4 4 4M8 8l2 2m11 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
)
export default CrossIcon
