function Navbar(){
    return (
        <nav className="w-full py-4 px-6 flex justify-between items-center bg-transparent">
            <div className="text-white font-semibold">Dollar Sid</div>
            <div className="flex gap-4 items-center">
                <a href="#projects" className="text-sm text-gray-200 hover:text-white">Projects</a>
                <a href="#about" className="text-sm text-gray-200 hover:text-white">About</a>
                <a href="#contact" className="text-sm text-gray-200 hover:text-white">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;