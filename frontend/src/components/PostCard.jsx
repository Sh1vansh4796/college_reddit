import { Link } from 'react-router-dom'
import { ThumbsUp, ThumbsDown, MessageCircle, Share } from 'lucide-react'
import { useState } from 'react'

export default function PostCard({ post, onUpvote, onDownvote }) {
    const [userVote, setUserVote] = useState(post.userVote || null)

    const handleUpvote = () => {
        if (userVote === 'up') {
            setUserVote(null)
        } else {
            setUserVote('up')
        }
        onUpvote?.()
    }

    const handleDownvote = () => {
        if (userVote === 'down') {
            setUserVote(null)
        } else {
            setUserVote('down')
        }
        onDownvote?.()
    }

    return (
        <div className="bg-dark-600 border border-dark-400 rounded-lg overflow-hidden hover:border-dark-300 transition mb-3">
            <div className="flex">
                {/* Vote buttons */}
                <div className="bg-dark-700 p-3 flex flex-col items-center gap-2 min-w-fit">
                    <button
                        onClick={handleUpvote}
                        className={`p-2 hover:bg-dark-500 rounded transition ${userVote === 'up' ? 'text-orange-500' : 'text-dark-200'
                            }`}
                    >
                        <ThumbsUp size={18} />
                    </button>
                    <span className="text-xs font-medium text-dark-100">
                        {post.upvotes - post.downvotes}
                    </span>
                    <button
                        onClick={handleDownvote}
                        className={`p-2 hover:bg-dark-500 rounded transition ${userVote === 'down' ? 'text-blue-500' : 'text-dark-200'
                            }`}
                    >
                        <ThumbsDown size={18} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                    {/* Header */}
                    <div className="flex items-center gap-2 text-xs text-dark-200 mb-2">
                        <Link
                            to={`/r/${post.community.name}`}
                            className="font-bold text-dark-50 hover:underline"
                        >
                            r/{post.community.name}
                        </Link>
                        <span>•</span>
                        <span>Posted by {post.author.username}</span>
                        <span>•</span>
                        <span>{formatDate(post.createdAt)}</span>
                    </div>

                    {/* Title */}
                    <Link
                        to={`/r/${post.community.name}/comments/${post.id}`}
                        className="block text-base font-medium text-dark-50 hover:text-white mb-2 line-clamp-2"
                    >
                        {post.title}
                    </Link>

                    {/* Content preview */}
                    <p className="text-sm text-dark-200 line-clamp-3 mb-3">{post.content}</p>

                    {/* Image if exists */}
                    {post.image && (
                        <img
                            src={post.image}
                            alt="Post"
                            className="w-full h-64 object-cover rounded mb-3"
                        />
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-6 text-sm text-dark-200">
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-dark-500 rounded-lg transition">
                            <MessageCircle size={16} />
                            <span>{post.commentCount}</span>
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 hover:bg-dark-500 rounded-lg transition">
                            <Share size={16} />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function formatDate(date) {
    const d = new Date(date)
    const now = new Date()
    const diff = now.getTime() - d.getTime()

    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    if (days < 7) return `${days}d ago`

    return d.toLocaleDateString()
}
