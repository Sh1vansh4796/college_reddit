// User type
export const User = {
    id: '',
    username: '',
    avatar: '',
    email: '',
    college: '',
    joinedAt: new Date(),
}

// Community type
export const Community = {
    id: '',
    name: '',
    description: '',
    icon: '',
    banner: '',
    members: 0,
    createdAt: new Date(),
    isJoined: false,
}

// Post type
export const Post = {
    id: '',
    title: '',
    content: '',
    author: User,
    community: Community,
    upvotes: 0,
    downvotes: 0,
    commentCount: 0,
    image: '',
    createdAt: new Date(),
    userVote: null,
}

// Comment type
export const Comment = {
    id: '',
    content: '',
    author: User,
    upvotes: 0,
    downvotes: 0,
    replies: [],
    createdAt: new Date(),
    userVote: null,
}

// PostComment type
export const PostComment = {
    ...Comment,
    postId: '',
}
