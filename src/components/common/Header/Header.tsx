import { NavLinks } from '../../../constants';

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-md border-b border-white/10">
			<div className="flex items-center justify-between container mx-auto py-4 container-padding">
				<a href="#" className="flex flex-col">
					<span className="text-red-500 font-bold text-3xl leading-6 tracking-wider uppercase">
						honda
					</span>
					<span className="text-[11px]">The Power of Dreams</span>
				</a>
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
				<button className="inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none">
					build & price
				</button>
			</div>
		</header>
	);
};

export default Header;
