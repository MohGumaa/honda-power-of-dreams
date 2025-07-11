export type LogoProps = {
  className?: string;
  spanClassName?:string;
}

export type NavLinkProps = {
  id: number;
	text: string;
	href: string;
}

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  className:string;
  children: React.ReactNode
  onClick?: () => void
}