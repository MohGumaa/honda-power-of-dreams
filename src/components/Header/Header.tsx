import { Eye } from "lucide-react"
import Logo from "../ui/Logo/Logo"
import Button from "../ui/Button/Button"
import { NavLinks } from "../../constants"

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
        <Button type="button" onClick={()=> alert('This will not trigger')} className="bg-red-500 border-red-500 ring-offset-background hover:bg-red-600 hover:border-red-600 focus-visible:ring-ring focus-visible:ring-offset-2 text-white">
          <Eye size={20} />
          <span>build & price</span>
        </Button>
      </div>
    </header>
  )
}

export default Header
