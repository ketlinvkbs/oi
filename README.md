# Guru-Ti Application

A React-based web application for tech support and assistance with Guru-Ti features.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm or yarn package manager

You can verify your installation with:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ketlinvkbs/oi.git
cd oi
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

1. **Development mode:**
   
   To run the application in development mode with hot-reloading:

   ```bash
   npm run dev
   ```

   The application will start on `http://localhost:5173`

2. **Production build:**
   
   To create a production-ready build:

   ```bash
   npm run build
   ```

   To preview the production build locally:

   ```bash
   npm run preview
   ```

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
└── ...
```

- `src/components/` - Reusable React components
- `src/pages/` - Page components for different routes
- `src/services/` - API and external service integrations
- `src/assets/` - Static assets like images

## Technologies Used

- React 19
- Vite (build tool)
- Bootstrap (styling)
- React Router (navigation)
- Axios (HTTP requests)
- SCSS (styling)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Lint the code
- `npm run preview` - Preview production build

## Environment Setup

Make sure you have a stable internet connection during the initial installation to download all required packages.

## Troubleshooting

If you encounter any issues during installation:

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete the `node_modules` folder and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

If you have any issues running the application, please open an issue in the repository.

## Contributing

Feel free to fork this repository, make changes, and submit pull requests.