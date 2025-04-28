# 🚀 RESTful User API

## 📄 Description

This is a simple RESTful API for managing user data. It provides basic CRUD (Create, Read, Update, Delete) operations for user resources. Built with Node.js and Express.

## ✨ Features
- ➕ Create new users
- 🔍 Retrieve user details
- ✏️ Update existing user information
- ❌ Delete users

## 🛠️ Technologies Used
- 🟢 Node.js
- ⚡ Express.js

## 🔗 Endpoints

### `GET /users`
- Retrieves a list of all users.
- **Response**:
    ```
    [
        {
            "id": "1",
            "name": "John Doe",
            "age": 30,
            "email": "john.doe@example.com"
        },
        {
            "id": "2",
            "name": "Jane Smith",
            "age": 25,
            "email": "jane.smith@example.com"
        }
    ]
    ```

### `GET /users/:id`
- Retrieves a specific user by ID.
- **Parameters**:
    - `id`: The ID of the user to retrieve.
- **Response**:
    ```
    {
        "id": "1",
        "name": "John Doe",
        "age": 30,
        "email": "john.doe@example.com"
    }
    ```

### `POST /users`
- Creates a new user.
- **Request Body**:
    ```
    {
        "name": "New User",
        "age": 28,
        "email": "new.user@example.com"
    }
    ```
- **Response**:
    ```
    {
        "message": "User created successfully",
        "user": {
            "id": "3",
            "name": "New User",
            "age": 28,
            "email": "new.user@example.com"
        }
    }
    ```

### `PUT /users/:id`
- Updates an existing user by ID.
- **Parameters**:
    - `id`: The ID of the user to update.
- **Request Body**:
    ```
    {
        "name": "Updated Name",
        "age": 31,
        "email": "updated.email@example.com"
    }
    ```
- **Response**:
    ```
    {
        "message": "User updated successfully",
        "user": {
            "id": "3",
            "name": "Updated Name",
            "age": 31,
            "email": "updated.email@example.com"
        }
    }
    ```

### `DELETE /users/:id`
- Deletes a user by ID.
- **Parameters**:
    - `id`: The ID of the user to delete.
- **Response**:
    ```
    {
        "message": "User deleted successfully"
    }
    ```

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js and npm installed

### ⚙️ Installation

1. Clone the repository:
    ```
    git clone https://github.com/TheRealFarhanDev/restful-user-api.git
    ```
2. Navigate to the project directory:
    ```
    cd restful-user-api
    ```
3. Install dependencies:
    ```
    npm install
    ```

### ▶️ Running the API
The API will be running on `http://localhost:3000`.

## 🤝 Contributing
Feel free to contribute by submitting pull requests.

