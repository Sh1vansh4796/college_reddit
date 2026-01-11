import { Link } from 'react-router-dom'
import { Home, Compass, Plus } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
    const [communities] = useState([
        { id: 1, name: 'MIT Campus', icon: '🎓' },
        { id: 2, name: 'Stanford Students', icon: '🌲' },
        { id: 3, name: 'Harvard Talk', icon: '📚' },
        { id: 4, name: 'College Memes', icon: '😂' },
    ])

    return (
        <aside className="w-64 bg-dark-600 border-r border-dark-300 overflow-y-auto hidden md:block">
            {/* Main Navigation */}
            <div className="p-4 space-y-2">
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-2 text-dark-50 hover:bg-dark-500 rounded-lg transition"
                >
                    <Home size={20} />
                    <span>Home</span>
                </Link>
                <Link
                    to="/explore"
                    className="flex items-center gap-3 px-4 py-2 text-dark-50 hover:bg-dark-500 rounded-lg transition"
                >
                    <Compass size={20} />
                    <span>Explore</span>
                </Link>
            </div>

            <hr className="border-dark-400 mx-4" />

            {/* Communities Section */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-dark-200 uppercase">Communities</h2>
                    <button className="p-1 hover:bg-dark-500 rounded transition">
                        <Plus size={18} className="text-dark-200" />
                    </button>
                </div>

                <div className="space-y-2">
                    {communities.map((community) => (
                        <Link
                            key={community.id}
                            to={`/r/${community.name.toLowerCase().replace(' ', '-')}`}
                            className="flex items-center gap-3 px-4 py-2 text-dark-50 hover:bg-dark-500 rounded-lg transition text-sm"
                        >
                            <span className="text-lg">{community.icon}</span>
                            <span>{community.name}</span>
                        </Link>
                    ))}
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-dark-500 hover:bg-dark-400 rounded-full text-sm font-medium text-dark-50 transition">
                    Create Community
                </button>
            </div>

            {/* Popular Section */}
            <hr className="border-dark-400 mx-4" />
            <div className="p-4">
                <h2 className="text-sm font-bold text-dark-200 uppercase mb-4">Popular Today</h2>
                <div className="space-y-2 text-sm">
                    <p className="text-dark-200">Trending posts will appear here</p>
                </div>
            </div>
        </aside>
    )
}
