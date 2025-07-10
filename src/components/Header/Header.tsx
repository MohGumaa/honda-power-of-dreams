import Logo from "../ui/Logo/Logo"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container-padding container flex justify-between items-center gap-3 mx-auto py-4">
        <Logo/>
      </div>
    </header>
  )
}

export default Header
