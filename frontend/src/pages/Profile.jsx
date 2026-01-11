import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'
import { Calendar } from 'lucide-react'

export default function Profile() {
    const { username } = useParams()
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const [tab, setTab] = useState('posts')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUser()
        fetchUserPosts()
    }, [username])

    const fetchUser = async () => {
        const mockUser = {
            id: 'u1',
            username: username || 'user',
            email: 'user@college.edu',
            college: 'MIT',
            joinedAt: new Date(2023, 0, 15),
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
        }
        setUser(mockUser)
    }

    const fetchUserPosts = async () => {
        setLoading(true)
        const mockPosts = [
            {
                id: '1',
                title: 'My journey from failing calculus to acing it',
                content: 'Here is how I turned my D+ into an A...',
                author: {
                    id: 'u1',
                    username: username || 'user',
                    email: 'user@college.edu',
                    joinedAt: new Date(),
                },
                community: {
                    id: 'c1',
                    name: 'StudyTips',
                    description: 'Study Tips',
                    members: 5000,
                    createdAt: new Date(),
                },
                upvotes: 2341,
                downvotes: 50,
                commentCount: 234,
                createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            },
        ]
        setPosts(mockPosts)
        setLoading(false)
    }

    if (!user) {
        return <div className="p-4 text-center text-dark-200">Loading profile...</div>
    }

    return (
        <div className="max-w-2xl mx-auto">
            {/* Profile Banner */}
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

            {/* Profile Info */}
            <div className="bg-dark-600 border-b border-dark-400 px-4 py-6 -mt-16 relative">
                <div className="flex gap-6">
                    {/* Avatar */}
                    <img
                        src={user.avatar}
                        alt={user.username}
                        className="w-32 h-32 rounded-full border-4 border-dark-600"
                    />

                    {/* User Info */}
                    <div className="flex-1 pt-12">
                        <h1 className="text-2xl font-bold text-white">{user.username}</h1>
                        <p className="text-dark-200 text-sm mt-1">u/{user.username}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-dark-200 mt-4">
                            {user.college && (
                                <div className="flex items-center gap-2">
                                    <span>🎓</span>
                                    <span>{user.college}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>Joined {user.joinedAt.toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-dark-600 border-b border-dark-400 flex">
                <button
                    onClick={() => setTab('posts')}
                    className={`flex-1 px-4 py-4 font-medium transition border-b-2 ${tab === 'posts'
                            ? 'border-orange-500 text-orange-500'
                            : 'border-transparent text-dark-200 hover:text-dark-50'
                        }`}
                >
                    Posts
                </button>
                <button
                    onClick={() => setTab('comments')}
                    className={`flex-1 px-4 py-4 font-medium transition border-b-2 ${tab === 'comments'
                            ? 'border-orange-500 text-orange-500'
                            : 'border-transparent text-dark-200 hover:text-dark-50'
                        }`}
                >
                    Comments
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                {loading ? (
                    <div className="text-center text-dark-200 py-8">Loading...</div>
                ) : tab === 'posts' ? (
                    <div className="space-y-3">
                        {posts.length === 0 ? (
                            <div className="text-center text-dark-200 py-8">No posts yet</div>
                        ) : (
                            posts.map((post) => <PostCard key={post.id} post={post} />)
                        )}
                    </div>
                ) : (
                    <div className="text-center text-dark-200 py-8">Comments section coming soon</div>
                )}
            </div>
        </div>
    )
}
