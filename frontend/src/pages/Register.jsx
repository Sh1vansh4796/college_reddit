import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, Lock, School } from 'lucide-react'

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        college: '',
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setError('')

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        setLoading(true)
        try {
            console.log('Register attempt:', formData)
            setTimeout(() => {
                navigate('/login')
            }, 1000)
        } catch (err) {
            setError('Registration failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const colleges = [
        'MIT',
        'Stanford',
        'Harvard',
        'Yale',
        'Princeton',
        'Penn',
        'Duke',
        'Northwestern',
        'Johns Hopkins',
        'Other',
    ]

    return (
        <div className="min-h-screen bg-dark-700 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4"></div>
                    <h1 className="text-2xl font-bold text-white">College Reddit</h1>
                    <p className="text-dark-200 text-sm mt-2">Join your campus community</p>
                </div>

                {/* Register Form */}
                <div className="bg-dark-600 border border-dark-400 rounded-lg p-6">
                    <form onSubmit={handleRegister} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-red-900 border border-red-700 rounded text-red-200 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-dark-50 mb-2">Username</label>
                            <div className="relative">
                                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-300" />
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full bg-dark-700 border border-dark-400 rounded px-4 py-2 pl-10 text-dark-50 placeholder-dark-300 focus:outline-none focus:border-orange-500 transition"
                                    placeholder="username"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark-50 mb-2">Email</label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-300" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-dark-700 border border-dark-400 rounded px-4 py-2 pl-10 text-dark-50 placeholder-dark-300 focus:outline-none focus:border-orange-500 transition"
                                    placeholder="you@college.edu"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark-50 mb-2">College</label>
                            <div className="relative">
                                <School size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-300 z-10" />
                                <select
                                    name="college"
                                    value={formData.college}
                                    onChange={handleChange}
                                    className="w-full bg-dark-700 border border-dark-400 rounded px-4 py-2 pl-10 text-dark-50 focus:outline-none focus:border-orange-500 transition appearance-none"
                                    required
                                >
                                    <option value="">Select your college</option>
                                    {colleges.map((college) => (
                                        <option key={college} value={college}>
                                            {college}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark-50 mb-2">Password</label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-300" />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-dark-700 border border-dark-400 rounded px-4 py-2 pl-10 text-dark-50 placeholder-dark-300 focus:outline-none focus:border-orange-500 transition"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark-50 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-300" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
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
                            {loading ? 'Creating account...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-dark-200 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-orange-500 hover:underline font-medium">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
