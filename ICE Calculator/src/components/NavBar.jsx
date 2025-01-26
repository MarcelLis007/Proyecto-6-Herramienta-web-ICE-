
const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-white shadow-md p-4">
            <div className="flex items-center">
                <img src="logo.svg" alt="logo" className="h-10" />
            </div>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;
//intento asi vvvvvuu