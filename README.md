# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# GadgetHeaven - E-commerce Platform

## Live Website Link
You can view the live website here: [GadgetHeaven Live Website](https://your-live-link.com) *(Replace with your actual live link)*

## Requirement Document Link
You can access the project requirements here: [Requirement Document](https://your-requirement-link.com) *(Replace with your actual requirement document link)*

## React Fundamental Concepts Used

In this project, the following React fundamentals were used:

1. **Functional Components**: The project is built using functional components.
2. **useState**: Used to manage component states.
3. **useEffect**: Utilized for side-effects such as fetching data, setting up event listeners, etc.
4. **React Router**: Implemented routing between different views, including category pages and product details.
5. **Event Handling**: React event handling methods such as `onClick`, `onChange`, etc., were used for user interaction.
6. **Conditional Rendering**: Rendered UI elements conditionally based on the current state or props.
7. **State Lifting**: Managed states in parent components and passed them as props to child components where needed.
8. **Context API**: Used to manage the cart and wishlist globally across different components.

## Data Handling and Management

In this project, the following methods were used for handling and managing data:

1. **Context API**: Used to globally manage the cart and wishlist data across the application. This ensures that the cart and wishlist counts are updated dynamically throughout the app, without the need for prop drilling.
2. **Local Storage**: Utilized to persist cart and wishlist items across page reloads. When items are added or removed from the cart or wishlist, they are stored in the browser's local storage.

## Features of the Website

Here are 5 key features of the GadgetHeaven e-commerce platform:

1. **Product Categories**: The platform offers products categorized by type (e.g., laptops, phones, accessories), making it easy for users to navigate.
2. **Product Details Page**: Users can view detailed information about products by clicking the "View Details" button.
3. **Add to Cart**: Users can add products to the cart, view the cart, and proceed with checkout.
4. **Wishlist**: Users can save products to their wishlist for future reference.
5. **Dynamic Cart and Wishlist Updates**: The cart and wishlist count updates in real-time when items are added or removed, without requiring a page reload.

## Installation and Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gadget-heaven.git
