import { Eye } from 'lucide-react';
import { NavLinks } from '../../../constants';
import Button from '../../ui/Button/Button';
import Logo from '../../ui/Logo/Logo';

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-md border-b border-white/10">
			<div className="flex items-center justify-between container mx-auto py-4 container-padding">
				<Logo />
				<nav className="hidden flex-1 md:flex justify-center items-center gap-x-8">
					{NavLinks.map((link) => (
						<a
							key={link.id}
							href={link.href}
							className="capitalize hover:text-red-400 transition-colors"
						>
							{link.text}
						</a>
					))}
				</nav>
				<Button className="capitalize text-white bg-red-500 border border-red-500 ring-offset-background hover:bg-red-600 hover:border-red-600 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 px-4 py-2 h-10 ">
					<Eye size={20} />
					<span>build & price</span>
				</Button>
			</div>
		</header>
	);
};

export default Header;
