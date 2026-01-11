import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

export default function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [sortBy, setSortBy] = useState('hot')

    useEffect(() => {
        fetchPosts()
    }, [sortBy])

    const fetchPosts = async () => {
        setLoading(true)
        const mockPosts = [
            {
                id: '1',
                title: 'Best study spots in Harvard Library',
                content: 'Just discovered the most amazing quiet study area on the 4th floor. Perfect for finals!',
                author: {
                    id: 'u1',
                    username: 'studygrind',
                    email: 'user@example.com',
                    joinedAt: new Date(),
                },
                community: {
                    id: 'c1',
                    name: 'Harvard',
                    description: 'Harvard University Community',
                    members: 5420,
                    createdAt: new Date(),
                },
                upvotes: 1240,
                downvotes: 45,
                commentCount: 67,
                createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
            },
            {
                id: '2',
                title: 'Unpopular opinion: Dining hall pizza is actually good',
                content: 'Change my mind. The pepperoni pizza they serve on Thursdays is legitimately delicious.',
                author: {
                    id: 'u2',
                    username: 'pizzalover',
                    email: 'pizza@example.com',
                    joinedAt: new Date(),
                },
                community: {
                    id: 'c2',
                    name: 'CollegeMemes',
                    description: 'College Life Memes',
                    members: 45230,
                    createdAt: new Date(),
                },
                upvotes: 3421,
                downvotes: 234,
                commentCount: 456,
                createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
            },
        ]
        setPosts(mockPosts)
        setLoading(false)
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Sort buttons */}
            <div className="flex gap-2 mb-6">
                {['hot', 'new', 'top'].map((sort) => (
                    <button
                        key={sort}
                        onClick={() => setSortBy(sort)}
                        className={`px-4 py-2 rounded-full font-medium transition text-sm capitalize ${sortBy === sort
                                ? 'bg-orange-500 text-white'
                                : 'bg-dark-600 text-dark-200 hover:bg-dark-500'
                            }`}
                    >
                        {sort}
                    </button>
                ))}
            </div>

            {/* Posts list */}
            {loading ? (
                <div className="text-center text-dark-200 py-8">Loading posts...</div>
            ) : posts.length === 0 ? (
                <div className="text-center text-dark-200 py-8">No posts yet. Be the first to post!</div>
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
    )
}
