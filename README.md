# Apple Catalog.Store

#### Introduction
Apple Catalog Store is a responsive e-commerce application built with React and TypeScript. The project simulates an online Apple product store, allowing users to browse phones, tablets, and accessories, view detailed product information, manage favourites, and interact with a fully functional shopping cart.

The application focuses on delivering a smooth user experience through modern UI components, responsive design, client-side routing, and persistent user data stored in localStorage.

# Live Demo

Experience the live website: [Apple-catalog Store DEMO LINK](https://ivan1302.github.io/Apple-catalog_Store/)

# Design Reference

[Apple Catalog Figma](<https://www.figma.com/file/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog-(V2)-Original>)

# Key Features

- Responsive design optimized for desktop, tablet, and mobile devices
- Home page with product sliders, category previews, and featured products
- Product catalog with filtering, sorting, pagination, and item count selection
- Detailed product pages with image galleries, specifications, color and capacity selection
- Suggested products section for improved product discovery
- Favourites functionality with data persistence using localStorage
- Shopping cart with quantity management and persistent storage
- Checkout modal for order confirmation
- Interactive Swiper sliders across the application
- Loading animations powered by Lottie
- Mobile-friendly hamburger menu and adaptive navigation
- Dynamic client-side routing using React Router DOM
- Smooth user experience without page reloads

# Technical Challenges

During development, several challenges were addressed to improve both functionality and user experience.

#### State Management

Managing favourites, cart items, and product data across different pages required careful organization of application state and synchronization with localStorage.

#### Dynamic Routing

Creating dynamic product pages and maintaining navigation between categories, product details, favourites, and cart pages required efficient routing architecture using React Router.

#### Responsive Design

Ensuring a consistent experience across various screen sizes involved extensive work with SCSS, adaptive layouts, and reusable components.

#### Performance and User Experience

Implementing loading animations, optimized rendering, and smooth slider interactions helped improve the overall responsiveness of the application.

# Technologies Used

This project was built using:

- `React`: For building reusable UI components and managing the application's user interface.
- `TypeScript`: For adding static typing, improving code reliability, and enhancing developer experience.
- `Vite`: A fast build tool and development server used for project bundling and optimization.
- `SCSS (Sass)`: A CSS preprocessor used for writing maintainable, reusable, and organized styles.
- `Swiper`: For creating responsive and interactive product sliders and carousels.
- `Lottie React`: For displaying lightweight and smooth loading animations.
- `React Router DOM`: For implementing client-side routing and navigation between pages.
- `ESLint`: For maintaining code quality and enforcing consistent coding standards.
- `Prettier`: For automatic code formatting and improved readability.
- `NPM`: For managing project dependencies and scripts.
- `Git`: For version control and tracking changes throughout development.
- `GitHub`: For hosting the repository and project collaboration.

# Installation and Setup

Clone the repository:

```bash
git clone https://github.com/ivan1302/Apple-catalog_Store.git
```

Navigate to the project directory:

```bash
cd Apple-catalog_Store
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

# Notes

The app uses a local JSON API under `public/api`, so it runs directly in a browser environment without an external backend.
