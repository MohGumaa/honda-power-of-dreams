import type { ButtonProps } from "../../../types"

const Button = ({ type="button", disabled, className, onClick, children}: ButtonProps) => {
  return (
    <button type={type} className={`inline-flex items-center justify-center gap-x-1 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50  cursor-pointer transition-all capitalize border px-4 py-2 h-10 [&_svg]:pointer-events-none [&_svg]:shrink-0  ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
