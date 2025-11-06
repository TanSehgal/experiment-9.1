# Experiment 9.1: Dockerize React App with Multi-Stage Build

## 🎯 Objective
Create a production-ready Docker image for a React application using multi-stage build to optimize image size and separate build dependencies from runtime.

## 📦 Project Structure
```
experiment-9.1/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── Dockerfile
├── .dockerignore
├── package.json
└── README.md
```

## 🐳 Multi-Stage Dockerfile Explanation

The Dockerfile uses **two stages** to optimize the build:

### Stage 1: Build Stage (node:18-alpine)
- Installs all dependencies including devDependencies
- Builds the React application
- Creates optimized production build in `/app/build`

### Stage 2: Production Stage (nginx:alpine)
- Uses lightweight Nginx Alpine image
- Copies only the built static files from Stage 1
- Serves the app on port 80
- **Result**: Much smaller final image!

## 🚀 How to Build and Run

### Prerequisites
- Docker installed on your system
- Git (to clone the repository)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/TanSehgal/experiment-9.1.git
cd experiment-9.1
```

2. **Build the Docker image**
```bash
docker build -t react-docker-app .
```

3. **Run the container**
```bash
docker run -p 80:80 react-docker-app
```

4. **Access the application**
Open your browser and navigate to:
```
http://localhost
```

## 📊 Image Size Comparison

| Build Type | Image Size | Description |
|-----------|-----------|-------------|
| **Without Multi-Stage** | ~1.2 GB | Includes Node.js, npm, and all dependencies |
| **With Multi-Stage** | ~25 MB | Only Nginx and static files |

✅ **Reduction: ~98% smaller!**

## 🛠️ Key Features

- ✅ Multi-stage Docker build
- ✅ Optimized production image
- ✅ Nginx web server for static files
- ✅ .dockerignore to exclude unnecessary files
- ✅ Smaller image size (~25 MB)
- ✅ Clear separation of build and runtime stages

## 📝 Additional Docker Commands

### View all Docker images
```bash
docker images
```

### Stop the running container
```bash
docker ps  # Get container ID
docker stop <container-id>
```

### Remove the image
```bash
docker rmi react-docker-app
```

### Run with custom port
```bash
docker run -p 8080:80 react-docker-app
# Access at http://localhost:8080
```

## 📖 Learning Outcomes

1. Understanding Docker multi-stage builds
2. Optimizing Docker images for production
3. Serving React apps with Nginx
4. Using .dockerignore effectively
5. Comparing image sizes and build strategies

## 👨‍💻 Author
TanSehgal

## 📝 License
This project is for educational purposes.

---

**Happy Dockerizing! 🐳✨**
