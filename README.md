# React app for B2B d.o.o.

This project is a React application that can be run in two different ways:

1. Using **Node.js** and **npm**.
2. Using **Docker**.

## Prerequisites

Before running the app, make sure you have the following installed:

### 1. **Node.js** and **npm**:
- **Node.js version 22.9.0** (or compatible)
- **npm version 10.9.0** (or compatible)

### 2. **Docker**:
- Ensure you have **Docker** installed on your machine.

## Running the Application

You can run the application using either of the following methods:

---

### 1. Running with Node.js and npm

#### Step 1: Clone the repository

```bash
git clone https://github.com/AlemaSalkicDev/b2b-task.git
cd your-repo
```

#### Step 2: Install dependencies
Run the following command to install all the required dependencies for the project:
```bash
npm install
```

#### Step 3: Start the application
Once the dependencies are installed, start the development server with the following command:
```bash
npm start
```
This will start the app, and you should be able to open it by visiting:
```bash
http://localhost:3000
```

### 2. Running with Docker

#### Step 1: Clone the repository

```bash
git clone https://github.com/AlemaSalkicDev/b2b-task.git
cd your-repo
```

#### Step 2: Build the Docker image

Run the following command to build the Docker image:

```bash
docker build -t react-app .
```

#### Step 3: Run the Docker container

Once the image is built, run the Docker container with the following command:

```bash
docker run -p 3000:80 react-app
```

This will start the app, and you should be able to open it by visiting:
```bash
http://localhost:3000
```

## Troubleshooting

- If you encounter any issues with Docker, ensure Docker is running and properly configured.
- If the app does not open at `localhost:3000`, check if there are any errors in the terminal where you ran `npm start` or `docker run`.