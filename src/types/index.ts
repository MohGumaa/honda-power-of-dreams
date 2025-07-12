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

export type MEDIAITEMSPROPS = {
  id:number;
  type: string;
  src: string;
  title: string;
  subtitle: string;
  description: string;
}[]