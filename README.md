## Online Coures Platform

A platform for online courses with features like user authentication, course management, and profile updates.

---

## Project Documentation

### Table of Contents
1. [Project Setup](#project-setup)
2. [Backend Setup](#backend-setup)
3. [Frontend Setup](#frontend-setup)
4. [API Routes](#api-routes)
    - [Authentication](#authentication)
    - [User Profile](#user-profile)
    - [Courses](#courses)
    - [Products](#products)
5. [Authentication Flow](#authentication-flow)
    - [User Registration](#user-registration)
    - [User Login](#user-login)
    - [Protected Routes](#protected-routes)
6. [Challenges Faced](#challenges-faced-and-solutions)
7. [Technologies Used](#technologies-used)

---

## Project Setup

### Backend Setup

#### Prerequisites:
- Ensure that **Node.js** and **npm** are installed.
- **MongoDB** should be running locally or on a cloud service (e.g., MongoDB Atlas).

#### Steps:
1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Set up environment variables**:
    - Create a `.env` file in the root of the backend folder with the following content:
    ```env
    PORT=4000
    MONGO_URI=<your_mongo_db_connection_string>
    JWT_SECRET=<your_secret_key>
    ```

3. **Start the backend server**:
    ```bash
    npm start
    ```
    The server will run on [http://localhost:4000](http://localhost:4000).

---

### Frontend Setup

#### Prerequisites:
- Ensure that **Node.js** and **npm** are installed.

#### Steps:
1. **Navigate to the frontend directory**:
    ```bash
    cd <frontend_directory>
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```
    The frontend will be available on [http://localhost:3000](http://localhost:3000).

---

## API Routes

### Authentication

- **POST /register**  
  Registers a new user with name, email, and password. Passwords are hashed using bcrypt.

- **POST /login**  
  Logs in a user and returns a JWT token.

---

### User Profile

- **POST /api/profile**  
  Creates or updates a user profile with name, email, bio, location, and a Base64-encoded image.

- **GET /api/profile/:email**  
  Fetches the user profile by email.

- **PUT /api/profile/:email**  
  Updates the profile for a specific email.

---

### Courses

- **POST /api/courses**  
  Adds a new course with fields like id, name, category, price, etc.

- **GET /api/courses**  
  Retrieves courses. Supports filtering by type via query parameters.

---


## Authentication Flow

### User Registration
1. The user provides name, email, and password via the `/register` endpoint.
2. Passwords are securely hashed before saving in MongoDB.

### User Login
1. The user logs in with email and password via the `/login` endpoint.
2. A valid JWT token is issued if authentication succeeds.
3. The token is stored on the client side (e.g., in localStorage or cookies).

### Protected Routes
1. Routes like `/` and others use the `authToken` middleware to verify the token.
2. Unauthorized users are restricted from accessing these routes.

---

## Challenges Faced and Solutions

### Image Upload Delays
- **Challenge**: Uploading large images (Base64-encoded) caused delays in processing.
- **Solution**:
    - Implemented a 10MB limit on request payload using `body-parser`.
    - Users were encouraged to optimize images before upload.

### Search Recommendation UI Issue
- **Challenge**: The search bar dropdown menu remained open even after displaying results, requiring users to manually clear the search bar.
- **Solution**:
    - Added logic to clear the dropdown when a result is selected or when the search bar loses focus.
    - Improved the debounce implementation for smoother search suggestions.

---

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, JWT, bcrypt
- **Frontend**: React.js, Tailwind CSS
- **Environment Variables**: Managed using `dotenv`
- **Middleware**: `cors`, `body-parser`

---
