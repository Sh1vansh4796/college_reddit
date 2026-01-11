# College Reddit Frontend

A modern Reddit clone built for college students using React with JavaScript.

## Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Navbar.jsx      # Navigation bar
│   ├── Sidebar.jsx     # Left sidebar with communities
│   ├── PostCard.jsx    # Post display component
│   └── CommentSection.jsx # Comments display
├── pages/              # Page components (routes)
│   ├── Home.jsx        # Feed/home page
│   ├── Community.jsx   # Community-specific page
│   ├── Post.jsx        # Single post detail page
│   ├── Login.jsx       # Login page
│   ├── Register.jsx    # Registration page
│   └── Profile.jsx     # User profile page
├── lib/
│   └── api.js          # API client and endpoints
├── types/
│   └── index.js        # Type definitions
├── App.jsx             # Main app component with routing
├── main.jsx            # React DOM entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will run on `http://localhost:3000` with API proxy to `http://localhost:5000/api`

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Features

- **Feed/Home** - Browse posts from all communities
- **Communities** - View and join college-specific communities
- **Posts** - Create, read, and interact with posts
- **Comments** - Comment on posts with nested replies
- **Voting** - Upvote and downvote posts and comments
- **User Profiles** - View user posts and activity
- **Authentication** - Login and registration pages
- **Dark Theme** - Reddit-style dark interface

## API Integration

All API endpoints are defined in `src/lib/api.js`. The app expects a backend API running at `http://localhost:5000/api`.

### Available Endpoints:
- **Auth**: login, register, logout, getCurrentUser
- **Communities**: getAll, getById, create, join, leave
- **Posts**: getAll, getByommunity, getById, create, update, delete, upvote, downvote
- **Comments**: getByPost, create, update, delete, upvote, downvote
- **Users**: getProfile, updateProfile

## Next Steps

1. Set up the backend API (Node.js + Express + MongoDB)
2. Connect frontend to actual backend endpoints
3. Implement real authentication with JWT
4. Add user state management (Context API or Redux)
5. Deploy to production

## Notes

- All components use functional components with React Hooks
- Styling uses Tailwind CSS with custom dark theme colors
- Mock data is used for development - replace with API calls
- No TypeScript - pure JavaScript for simplicity
