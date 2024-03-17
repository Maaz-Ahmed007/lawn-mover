import Link from "next/link"

const Navbar = () => {
    return (
        <header className="w-[1140px] max-w-[80%] m-auto h-[50px] pt-4 flex items-center relative z-50">
            <nav className="flex items-center justify-between w-full">
                <Link href="/" className="text-xl font-bold border-b-2 border-lime-300">Lawn <span className="text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-emerald-600">Mower</span></Link>
                <div>
                    <Link href="" className="text-base font-light active:font-medium hover:font-normal hover:border-b-2 hover:border-lime-300 text-gray-600 hover:text-emerald-700 mr-10">Home</Link>
                    <Link href="" className="text-base font-light active:font-medium hover:font-normal hover:border-b-2 hover:border-lime-300 text-gray-600 hover:text-emerald-700 mr-10">Contacts</Link>
                    <Link href="" className="text-base font-light active:font-medium hover:font-normal hover:border-b-2 hover:border-lime-300 text-gray-600 hover:text-emerald-700 mr-10">Info</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar