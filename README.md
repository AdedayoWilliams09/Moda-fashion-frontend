# MODA Fashion - Frontend

## Overview
The frontend of MODA Fashion is a modern React application built with Vite, Tailwind CSS, and Redux Toolkit. It features a responsive design, dark mode support, and smooth animations.

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS 4
- Framer Motion
- Redux Toolkit
- React Router DOM 6
- React Icons

## Project Structure
src/
├── assets/ # Static assets (images)
├── components/ # Reusable UI components
├── layouts/ # Layout components
├── pages/ # Page components
├── store/ # Redux store and slices
├── App.jsx # Main app component
├── main.jsx # Entry point
└── index.css # Global styles


## Features Implemented (Phase 1)
- ✅ Responsive Navbar with mobile hamburger menu
- ✅ Footer with links and social media
- ✅ Theme Toggler (light/dark mode)
- ✅ Page transitions with Framer Motion
- ✅ Redux store for theme management
- ✅ Basic page structure

## Environment Variables
Create a `.env` file:

VITE_API_URL=http://localhost:5000/api


## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment
The frontend is deployed on Vercel/Netlify. Build command: `npm run build`, Output directory: `dist`