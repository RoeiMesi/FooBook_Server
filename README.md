# Foobook Server

Foobook Server is a backend service built using Node.js, Express, and MongoDB. It's designed to support a social media platform, providing endpoints for user authentication, friend management, and post creation. The server is structured following the MVC (Model-View-Controller) pattern, with the view component being served by a React frontend.

## Features

- **User Authentication**: Secure login and registration system, generating JWTs for session management.
- **Friend Management**: Users can send, accept, or decline friend requests.
- **Posting**: Users can create, edit, and delete their posts. Posts from friends and non-friends are visible according to user settings.
- **Data Seeding for Development**: Populate the MongoDB database with fake data for testing and development purposes.

### Seamless Integration with React Frontend

The Foobook Server is designed to work seamlessly with the Foobook_Web React frontend, supporting SPA (Single Page Application) behaviors such as refreshing the page and navigating through routes without losing application state. This is achieved through:

- **Server-Side Rendering Support**: Although the server mainly handles API requests, it's configured to properly serve the React application, allowing for direct access to different routes without redirecting to the homepage on refresh.
- **State Management**: The server and client are designed to ensure that user sessions and application state are preserved across page reloads and navigation, leveraging JWTs for session management and MongoDB for persistent storage.
- **Dynamic Routing**: API endpoints are structured to align with the React application's routing, ensuring that data fetching and manipulation can be performed in a way that's consistent with the user's navigation.


## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

```bash
git clone https://github.com/TomerBeren/FooBook_Server
cd FooBook_Server
npm install
```

### Configuration

Create a `.env` file in the root directory. Define the following:

- `NODE_ENV`: Environment setting (local for development).
- `CONNECTION_STRING`: MongoDB connection URI.
- `PORT`: Port for the server to listen on.

Example `.env` content:

```env
NODE_ENV=local
CONNECTION_STRING=mongodb://localhost:27017/foobook
PORT=3000
```

### Running the Server

To start the server without populating the MongoDB database with fake data:

```bash
npm start
```

To start the server and populate the MongoDB database with fake data:

```bash
npm run dev
```

The `dev` script will seed the database with users and posts to facilitate development and testing.

### Seeding the Database

The seeding script (`seed.js`) populates the database with fake data using the `chance` and `faker` libraries. This includes creating users with profiles, establishing friend connections, and generating posts.

### API Endpoints Overview

- `/api/users` for user registration and management.
- `/api/tokens` for authentication and JWT creation.
- `/api/posts` to fetch, create, and manage posts.

Further endpoints support detailed user and post interactions, including editing profiles, managing friend lists, managing friend requests and post visibility according to user relationships.

Ensure your `.env` file is set up with your MongoDB connection string and desired port before starting the server.
