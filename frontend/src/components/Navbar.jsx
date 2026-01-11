import { Link } from 'react-router-dom'
import { Search, Bell, Mail, User, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <nav className="bg-dark-600 border-b border-dark-300 px-4 py-3 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <span className="hidden sm:inline">College Reddit</span>
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-md hidden sm:block">
                    <div className="flex items-center bg-dark-400 rounded-full px-4 py-2 gap-2">
                        <Search size={18} className="text-dark-200" />
                        <input
                            type="text"
                            placeholder="Search posts and communities..."
                            className="bg-transparent outline-none w-full text-sm text-dark-50 placeholder-dark-200"
                        />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
                        <>
                            <button className="p-2 hover:bg-dark-500 rounded-full transition">
                                <Bell size={20} className="text-dark-200" />
                            </button>
                            <button className="p-2 hover:bg-dark-500 rounded-full transition">
                                <Mail size={20} className="text-dark-200" />
                            </button>
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="p-2 hover:bg-dark-500 rounded-full transition"
                                >
                                    <User size={20} className="text-dark-200" />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-dark-600 border border-dark-300 rounded-lg shadow-lg py-2">
                                        <Link
                                            to="/user/profile"
                                            className="block px-4 py-2 hover:bg-dark-500 text-sm"
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={() => setIsLoggedIn(false)}
                                            className="w-full text-left px-4 py-2 hover:bg-dark-500 text-sm flex items-center gap-2"
                                        >
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-6 py-2 text-sm font-medium text-dark-50 hover:bg-dark-500 rounded transition"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/register"
                                className="px-6 py-2 text-sm font-medium bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
