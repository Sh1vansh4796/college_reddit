import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { Bell } from 'lucide-react'

export default function CommunityPage() {
    const { communityName } = useParams()
    const [community, setCommunity] = useState(null)
    const [posts, setPosts] = useState([])
    const [isJoined, setIsJoined] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCommunity()
        fetchPosts()
    }, [communityName])

    const fetchCommunity = async () => {
        const mockCommunity = {
            id: 'c1',
            name: communityName || 'Community',
            description: `Welcome to ${communityName || 'Community'}! A place for college students to connect.`,
            members: 12450,
            createdAt: new Date(2020, 0, 1),
        }
        setCommunity(mockCommunity)
    }

    const fetchPosts = async () => {
        setLoading(true)
        const mockPosts = [
            {
                id: '1',
                title: 'Midterm season survival guide',
                content: 'Share your best tips for surviving midterm exams!',
                author: {
                    id: 'u1',
                    username: 'studybuddy',
                    email: 'study@example.com',
                    joinedAt: new Date(),
                },
                community: {
                    id: 'c1',
                    name: communityName || 'Community',
                    description: 'Community Description',
                    members: 12450,
                    createdAt: new Date(),
                },
                upvotes: 890,
                downvotes: 23,
                commentCount: 145,
                createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
            },
        ]
        setPosts(mockPosts)
        setLoading(false)
    }

    if (!community) {
        return <div className="p-4 text-center text-dark-200">Loading community...</div>
    }

    return (
        <div>
            {/* Community Banner */}
            <div className="h-32 bg-gradient-to-r from-orange-500 to-orange-600"></div>

            {/* Community Info */}
            <div className="bg-dark-600 border-b border-dark-400">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white mb-2">r/{community.name}</h1>
                            <p className="text-dark-200 text-sm mb-3">{community.description}</p>
                            <div className="text-xs text-dark-300">
                                {community.members.toLocaleString()} members
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsJoined(!isJoined)}
                                className={`px-6 py-2 rounded-full font-medium transition text-sm ${isJoined
                                        ? 'bg-dark-500 text-dark-50 hover:bg-dark-400'
                                        : 'bg-orange-500 text-white hover:bg-orange-600'
                                    }`}
                            >
                                {isJoined ? 'Joined' : 'Join'}
                            </button>
                            {isJoined && (
                                <button className="p-2 bg-dark-500 hover:bg-dark-400 rounded-full transition">
                                    <Bell size={20} className="text-dark-200" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Posts */}
            <div className="max-w-2xl mx-auto p-4">
                {loading ? (
                    <div className="text-center text-dark-200 py-8">Loading posts...</div>
                ) : posts.length === 0 ? (
                    <div className="text-center text-dark-200 py-8">No posts in this community yet.</div>
                ) : (
                    <div className="space-y-3">
                        {posts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                onUpvote={() => console.log('Upvote:', post.id)}
                                onDownvote={() => console.log('Downvote:', post.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
