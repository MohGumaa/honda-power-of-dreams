import { NavLinks } from "../../constants"
import Logo from "../ui/Logo/Logo"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container-padding container flex justify-between items-center gap-3 mx-auto py-4">
        <Logo/>
        <nav className="flex-1">
          <ul className="flexCenter gap-x-8">{NavLinks.map(link => (
            <a key={link.id} href={link.href} className="capitalize hover:text-red-400 transition-colors">{link.text}</a>
          ))}</ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
