function Navbar(){
    return (
        <nav className="w-full py-4 px-6 flex justify-between items-center bg-transparent">
            <div className="text-white font-semibold">Dollar Sid</div>
            <div className="flex gap-4 items-center">
                <a href="#projects" className="text-sm bg-[#04132e] hover:bg-cyan-300 px-3 py-1 rounded-md text-gray-200 hover:text-[#04132e]">Projects</a>
                <a href="#about" className="text-sm bg-[#04132e] hover:bg-cyan-300 px-3 py-1 rounded-md text-gray-200 hover:text-[#04132e]">About</a>
                <a href="#contact" className="text-sm bg-[#04132e] hover:bg-cyan-300 px-3 py-1 rounded-md text-gray-200 hover:text-[#04132e]">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;