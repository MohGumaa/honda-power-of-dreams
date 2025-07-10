import type { LogoProps } from "../../../types"

const Logo = ({className="text-3xl leading-6", spanClassName="text-[11px]"}: LogoProps) => {
  return (
    <a href="#" className="flex flex-col">
			<span className={`text-red-500 font-bold tracking-wider uppercase ${className}`}>
				honda
			</span>
			<span className={spanClassName}>The Power of Dreams</span>
		</a>
  )
}

export default Logo
