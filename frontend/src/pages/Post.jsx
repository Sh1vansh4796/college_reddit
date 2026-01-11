import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import CommentSection from '../components/CommentSection'

export default function PostPage() {
    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPost()
        fetchComments()
    }, [postId])

    const fetchPost = async () => {
        setLoading(true)
        const mockPost = {
            id: postId || '1',
            title: 'The ultimate guide to passing organic chemistry',
            content: `Organic chemistry is one of the toughest courses in college, but with the right study strategy, it's definitely passable.

Here are my top tips:
1. Draw everything - mechanisms, structures, products
2. Form study groups
3. Practice problems every day
4. Visit office hours
5. Use mnemonic devices

What are your tips for surviving orgo?`,
            author: {
                id: 'u1',
                username: 'chemwhiz',
                email: 'chem@example.com',
                joinedAt: new Date(),
            },
            community: {
                id: 'c1',
                name: 'StudyTips',
                description: 'College Study Tips and Tricks',
                members: 34250,
                createdAt: new Date(),
            },
            upvotes: 5234,
            downvotes: 123,
            commentCount: 456,
            createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
        }
        setPost(mockPost)
        setLoading(false)
    }

    const fetchComments = async () => {
        const mockComments = [
            {
                id: 'c1',
                content: 'This is gold! Drawing everything really saved me in my orgo exam.',
                author: {
                    id: 'u2',
                    username: 'studentlife',
                    email: 'student@example.com',
                    joinedAt: new Date(),
                },
                upvotes: 342,
                downvotes: 5,
                createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
                replies: [
                    {
                        id: 'c1r1',
                        content: 'Right? I wish I knew this before taking the class!',
                        author: {
                            id: 'u3',
                            username: 'late2party',
                            email: 'late@example.com',
                            joinedAt: new Date(),
                        },
                        upvotes: 89,
                        downvotes: 2,
                        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
                    },
                ],
            },
            {
                id: 'c2',
                content: 'Office hours was a game changer for me. My TA explained concepts way better than the professor.',
                author: {
                    id: 'u4',
                    username: 'officehoursguy',
                    email: 'office@example.com',
                    joinedAt: new Date(),
                },
                upvotes: 267,
                downvotes: 3,
                createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
            },
        ]
        setComments(mockComments)
    }

    if (loading) {
        return <div className="p-4 text-center text-dark-200">Loading post...</div>
    }

    if (!post) {
        return <div className="p-4 text-center text-dark-200">Post not found</div>
    }

    return (
        <div className="max-w-2xl mx-auto p-4 py-6">
            <PostCard
                post={post}
                onUpvote={() => console.log('Upvote post')}
                onDownvote={() => console.log('Downvote post')}
            />

            <div className="mt-6">
                <h2 className="text-lg font-bold text-white mb-4">Comments</h2>
                <CommentSection
                    comments={comments}
                    onAddComment={(content) => {
                        console.log('Add comment:', content)
                    }}
                />
            </div>
        </div>
    )
}
