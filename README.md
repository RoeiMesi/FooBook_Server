<div align="center">
  <h1>FooBook_Server</h1>
</div>

<p align="center">
  <img src="https://raw.githubusercontent.com/RoeiMesi/FooBook_Android/main/app/src/main/res/drawable/foobook_logo.png" alt="foobook_logo">
</p>

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Server](#running-the-server)
- [Seeding the Database](#seeding-the-database)
- [API Endpoints Overview](#api-endpoints-overview)

---

## Introduction
FooBook_Server is a Node.js backend server designed for the FooBook social media platform. Built with **Express** and **MongoDB** following an **MVC structure**, it provides RESTful API endpoints that facilitate user authentication, friend management, and post creation. This server seamlessly integrates with the **FooBook_Web** React frontend for a smooth user experience.

---

## Features
- **User Authentication**  
  Secure login and registration with JSON Web Tokens for session management.
- **Friend Management**  
  Users can send, accept, or decline friend requests. Deleting a friend removes each user from the other’s friend list.
- **Post Creation & Interaction**  
  Users can create, edit, and delete their own posts, with control over post visibility across friend and non-friend relationships.
- **Seamless React Integration**  
  Designed to serve the FooBook_Web application, supporting page reloads and route navigation without losing user sessions or application state.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com)
- npm or yarn

### Installation
```bash
git clone https://github.com/RoeiMesi/FooBook_Server
cd FooBook_Server
npm install
```

### Configuration
Create a `.env` file in the project root with the following variables:
```env
NODE_ENV=local
CONNECTION_STRING=mongodb://localhost:27017/foobook
PORT=3000
```
- **NODE_ENV**: Environment setting (e.g., local, production).
- **CONNECTION_STRING**: MongoDB connection URI.
- **PORT**: The port on which the server will listen.

### Running the Server
- **Standard Run (No Seeding)**
  ```bash
  npm start
  ```
- **Development Run (With Seeding)**
  ```bash
  npm run dev
  ```
  This automatically populates your database with mock users and posts.

---

## Seeding the Database
The **`seed.js`** script creates a set of sample users, friend connections, and posts for development and testing. This is triggered by running `npm run dev`. You can modify the script to suit your testing needs.

---

## API Endpoints Overview
- **`/api/users`**  
  - **POST** `/register` – Create a new user  
  - **POST** `/login` – Authenticate a user
  - **GET** `/profile` – Retrieve profile information
  - **PUT** `/profile` – Update display name, profile picture
- **`/api/friends`**  
  - **POST** `/request` – Send a friend request
  - **PUT** `/accept` – Accept a friend request
  - **DELETE** `/decline` – Decline or remove a friend
- **`/api/posts`**  
  - **POST** `/create` – Create a post
  - **PUT** `/edit/:id` – Edit an existing post
  - **DELETE** `/delete/:id` – Delete a post
  - **GET** `/feed` – Retrieve posts from friends and non-friends

Additional routes may exist for more granular interactions. The server is structured to integrate cleanly with the **FooBook_Web** frontend, so minimal configuration is required for a smooth developer experience.

---

Enjoy exploring FooBook_Server!
