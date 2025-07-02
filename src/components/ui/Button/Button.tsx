import type { ButtonProps } from '../../../types';

const Button = ({ className, children }: ButtonProps) => {
	return (
		<button
			className={`inline-flex items-center justify-center gap-x-1 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 cursor-pointer transition-all ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
