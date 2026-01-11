import { ThumbsUp, ThumbsDown, Reply } from 'lucide-react'
import { useState } from 'react'

export default function CommentSection({ comments, onAddComment }) {
    const [replyContent, setReplyContent] = useState('')
    const [expandedReplies, setExpandedReplies] = useState(new Set())

    const handleAddComment = () => {
        if (replyContent.trim()) {
            onAddComment?.(replyContent)
            setReplyContent('')
        }
    }

    const toggleReplies = (commentId) => {
        const newExpanded = new Set(expandedReplies)
        if (newExpanded.has(commentId)) {
            newExpanded.delete(commentId)
        } else {
            newExpanded.add(commentId)
        }
        setExpandedReplies(newExpanded)
    }

    return (
        <div className="space-y-4">
            {/* Comment Input */}
            <div className="bg-dark-600 border border-dark-400 rounded-lg p-4">
                <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="What are your thoughts?"
                    className="w-full bg-dark-700 border border-dark-400 rounded p-3 text-dark-50 placeholder-dark-200 text-sm focus:outline-none focus:border-orange-500 resize-none"
                    rows={3}
                />
                <div className="mt-3 flex justify-end">
                    <button
                        onClick={handleAddComment}
                        className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-full font-medium text-white transition text-sm"
                    >
                        Comment
                    </button>
                </div>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
                {comments.map((comment) => (
                    <CommentThread
                        key={comment.id}
                        comment={comment}
                        onToggleReplies={() => toggleReplies(comment.id)}
                        isExpanded={expandedReplies.has(comment.id)}
                    />
                ))}
            </div>
        </div>
    )
}

function CommentThread({ comment, onToggleReplies, isExpanded }) {
    const [userVote, setUserVote] = useState(comment.userVote || null)

    return (
        <div className="space-y-2">
            <div className="bg-dark-600 border border-dark-400 rounded-lg p-4">
                <div className="flex gap-3">
                    {/* Vote buttons */}
                    <div className="flex flex-col items-center gap-1">
                        <button
                            onClick={() => setUserVote(userVote === 'up' ? null : 'up')}
                            className={`p-1 hover:bg-dark-500 rounded transition ${userVote === 'up' ? 'text-orange-500' : 'text-dark-200'
                                }`}
                        >
                            <ThumbsUp size={14} />
                        </button>
                        <span className="text-xs text-dark-200">
                            {comment.upvotes - comment.downvotes}
                        </span>
                        <button
                            onClick={() => setUserVote(userVote === 'down' ? null : 'down')}
                            className={`p-1 hover:bg-dark-500 rounded transition ${userVote === 'down' ? 'text-blue-500' : 'text-dark-200'
                                }`}
                        >
                            <ThumbsDown size={14} />
                        </button>
                    </div>

                    {/* Comment content */}
                    <div className="flex-1">
                        <div className="text-xs text-dark-200 mb-2">
                            <span className="font-bold text-dark-50">{comment.author.username}</span>
                            <span className="mx-2">•</span>
                            <span>{formatDate(comment.createdAt)}</span>
                        </div>
                        <p className="text-sm text-dark-50 mb-3">{comment.content}</p>
                        <button className="flex items-center gap-2 text-xs text-dark-200 hover:text-dark-50 transition">
                            <Reply size={14} />
                            <span>Reply</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
                <div>
                    <button
                        onClick={onToggleReplies}
                        className="text-xs text-orange-500 hover:text-orange-400 transition ml-6 mb-2"
                    >
                        {isExpanded ? '[-]' : '[+]'} {comment.replies.length} replies
                    </button>
                    {isExpanded && (
                        <div className="ml-6 border-l border-dark-400 pl-4 space-y-2">
                            {comment.replies.map((reply) => (
                                <CommentThread
                                    key={reply.id}
                                    comment={reply}
                                    onToggleReplies={() => { }}
                                    isExpanded={true}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
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
