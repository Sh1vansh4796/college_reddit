import axios from 'axios'

const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api'

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Auth endpoints
export const authAPI = {
    login: (email, password) =>
        api.post('/auth/login', { email, password }),
    register: (username, email, password, college) =>
        api.post('/auth/register', { username, email, password, college }),
    logout: () => api.post('/auth/logout'),
    getCurrentUser: () => api.get('/auth/me'),
}

// Community endpoints
export const communityAPI = {
    getAll: () => api.get('/communities'),
    getById: (id) => api.get(`/communities/${id}`),
    create: (data) => api.post('/communities', data),
    join: (id) => api.post(`/communities/${id}/join`),
    leave: (id) => api.post(`/communities/${id}/leave`),
}

// Posts endpoints
export const postsAPI = {
    getAll: (page, limit) =>
        api.get('/posts', { params: { page, limit } }),
    getByommunity: (communityId, page, limit) =>
        api.get(`/posts/community/${communityId}`, { params: { page, limit } }),
    getById: (id) => api.get(`/posts/${id}`),
    create: (data) => api.post('/posts', data),
    update: (id, data) => api.put(`/posts/${id}`, data),
    delete: (id) => api.delete(`/posts/${id}`),
    upvote: (id) => api.post(`/posts/${id}/upvote`),
    downvote: (id) => api.post(`/posts/${id}/downvote`),
}

// Comments endpoints
export const commentsAPI = {
    getByPost: (postId) => api.get(`/comments/post/${postId}`),
    create: (data) => api.post('/comments', data),
    update: (id, data) => api.put(`/comments/${id}`, data),
    delete: (id) => api.delete(`/comments/${id}`),
    upvote: (id) => api.post(`/comments/${id}/upvote`),
    downvote: (id) => api.post(`/comments/${id}/downvote`),
}

// User endpoints
export const userAPI = {
    getProfile: (id) => api.get(`/users/${id}`),
    updateProfile: (id, data) => api.put(`/users/${id}`, data),
}
