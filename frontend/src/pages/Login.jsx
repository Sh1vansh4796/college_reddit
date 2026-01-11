import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            console.log('Login attempt:', { email, password })
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (err) {
            setError('Invalid email or password')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-dark-700 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4"></div>
                    <h1 className="text-2xl font-bold text-white">College Reddit</h1>
                    <p className="text-dark-200 text-sm mt-2">Connect with your campus</p>
                </div>

                {/* Login Form */}
                <div className="bg-dark-600 border border-dark-400 rounded-lg p-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-red-900 border border-red-700 rounded text-red-200 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-dark-50 mb-2">Email</label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-300" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-dark-700 border border-dark-400 rounded px-4 py-2 pl-10 text-dark-50 placeholder-dark-300 focus:outline-none focus:border-orange-500 transition"
                                    placeholder="you@college.edu"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark-50 mb-2">Password</label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-300" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-dark-700 border border-dark-400 rounded px-4 py-2 pl-10 text-dark-50 placeholder-dark-300 focus:outline-none focus:border-orange-500 transition"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded transition"
                        >
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-dark-200 text-sm">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-orange-500 hover:underline font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
