 Recipe Finder - Incredible Recipe Discovery Platform

  Premium Features

  Core Functionality
-  Smart Recipe Search - Find recipes by ingredients, cuisine, or dish name
-  Favorites System - Save and manage your favorite recipes
-  Responsive Design - Perfect experience on all devices
-  Deep Linking - Share specific recipes with direct URLs

Very Nice UI/UX
-  Dark Gradient Theme - Modern purple, pink, and indigo color scheme
-  Smooth Animations - Hover effects, transitions, and micro-interactions
-  Floating Particles - Dynamic background animations
-  Premium Cards - 3D hover effects and gradient borders
-  Interactive Elements - Engaging buttons with shimmer effects

---

Quick Start

 Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager



 Installation


 Clone the repository
git clone https://github.com/Temiloluwa1616/recipe-finder.git

 Navigate to project directory
cd recipe-finder

 Install dependencies
npm install

 Start development server
npm start


The application will open at `http://localhost:3000` 



Project Structure


recipe-finder/
├── src/
│   ├── components/
│   │   ├── navbar/
│   │   │   └── index.jsx           Premium navigation component
│   │   └── recipe-item/
│   │       └── index.jsx           Recipe card component
│   ├── pages/
│   │   ├── home/
│   │   │   └── index.jsx           Home page with search
│   │   ├── details/
│   │   │   └── index.jsx           Recipe details page
│   │   └── favorites/
│   │       └── index.jsx           Saved recipes page
│   ├── context/
│   │   └── index.jsx               Global state management
│   ├── App.jsx                     Main app component
│   └── index.js                    App entry point
├── public/
├── package.json
└── README.md



 How to Use

 Searching for Recipes
1. Enter ingredients or dish names in the search bar
2. Press Enter or click the search button
3. Browse results in the beautiful card layout
4. Click "Recipe Details" to view full recipe information

Managing Favorites
1. Click the Save button on any recipe card or details page
2. Visit the Favorites page to view your saved recipes

 Navigation
- Home - Search and browse recipes
- Favorites - View your saved recipes
- Logo - Quick return to home page


Tech Stack

Frontend Framework
- React - Modern UI library with hooks
- React Router DOM - Client-side routing
- Context API - Global state management

 Styling & UI
- Tailwind CSS - Utility-first CSS framework
- Custom Animations - Smooth transitions and effects
- Responsive Design - Mobile-first approach

 External Services
- Forkify API - Recipe data source
- RESTful API Integration - Async data fetching



 Components
- Cards: Glassmorphism with hover effects
- Buttons: Gradient backgrounds with animations
- Navigation: Fixed, transparent header
- Loading: Multi-layer spinning animations




Features Breakdown

| Feature | Description | Status |
|---------|-------------|--------|
| Recipe Search | Search by ingredients/dishes |  Complete |
| Recipe Details | Full recipe information |  Complete |
| Favorites System | Save/remove favorites |  Complete |
| Responsive Design | Mobile & desktop support |  Complete |
| Premium UI | Glassmorphism & animations |  Complete |
| Real-time Search | Instant search results |  Complete |
| Loading States | Beautiful loading animations |  Complete |
| Error Handling | Graceful error management |  Complete |



 Configuration
 API Configuration
The app uses the Forkify API for recipe data:

const API_BASE_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';



Performance

-  Fast Loading - Optimized bundle size
-  Efficient Re-renders - React.memo and useCallback optimization
-  Mobile Optimized - Responsive images and layouts
-  Smooth Animations - Hardware-accelerated CSS transitions
-  Code Splitting - Lazy loading for better performance


Deployment

Netlify Deploy
Build the project
npm run build

Deploy to Netlify
netlify deploy --prod --dir=build


Vercel Deploy
Install Vercel CLI
npm i -g vercel

Deploy
vercel --prod


Contributing

We welcome contributions! Here's how you can help:

 Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'whateverfeature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Development Guidelines
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain responsive design
- Add comments for complex logic
- Test on multiple devices


Contact & Support

[![GitHub](https://github.com/Temiloluwa1616)
[![LinkedIn](www.linkedin.com/in/temiloluwa-sulaiman-58bb21282)


Star this repo if you found it helpful!
