# Voting App (pollQ)

Welcome to the **Voting App** repository! This project allows users to create, manage, and participate in voting events. The app is built with a Node.js backend and a Vite-powered frontend, designed for efficient performance and modern development workflows. This application is fully open source, so feel free to contribute or adapt it to your own needs.

## Scope for this project

- **Creation of UI/UX** (This is the major part).
- Figma design will also work.
- Ideas for the scope of this project (Must be written in [IDEAS.md](./IDEAS.md) file).
- Creation of backend/database.
- Creation of frontend (Majorly dark theme).
- How to scale is globally.
- Restrictions to user. User should be able to vote once per poll event.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (Login/Register)
- Create and manage polls
- Real-time vote updates
- Responsive and intuitive user interface
- Data persistence with MongoDB
- Backend REST API built with Node.js
- Frontend built with Vite (Vue.js or React, as applicable)

## Tech Stack

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: Vite (React), JavaScript/TypeScript
- **Database**: MongoDB
- **Real-Time Updates**: WebSockets (optional)

## Project Structure

The project is divided into two main folders:

- **Backend-server**: This contains the Node.js application code that serves as the API layer, handling user authentication, poll creation, and voting logic.
- **Frontend-server**: This contains the client-side code built using Vite, providing a modern interface for users to interact with the application.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (running locally or hosted)

## Setting up repository

1. Fork this repository to your own GitHub account.
2. Clone the forked repository to your local machine.

```bash
 git clone https://github.com/your-username/voting-app.git
```

3. Navigate to the project directory.

```bash
 cd voting-app
```
### Backend Setup
1. Navigate to the backend-server directory.

```bash
 cd backend-server
```

2. Install the required dependencies.

```bash
 npm install
```

3. Start the server.

```bash
 npm start
```
### Frontend Setup

1. Navigate to the frontend-server directory separately.

```bash
 cd frontend-server
```

2. Install the required dependencies.

```bash
 npm install
```

3. Start the server.

```bash
 npm run dev
```

> Backend is runnig on: http://localhost:5000

> Frontend is runnig on: http://localhost:5432

### Contributing
Contributions are welcome! To contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a Pull Request.


## License
This project is licensed under the [MIT licensed](./LICENSE). See the LICENSE file for details.