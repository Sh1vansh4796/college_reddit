import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Community from './pages/Community'
import Post from './pages/Post'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/r/:communityName" element={<Community />} />
                    <Route path="/r/:communityName/comments/:postId" element={<Post />} />
                    <Route path="/user/:username" element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
