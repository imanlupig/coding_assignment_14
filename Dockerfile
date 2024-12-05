# Step 1: Use an official Node.js image as the base image for building the app
FROM node:16 as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the app files into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lightweight Nginx image to serve the production build
FROM nginx:alpine

# Step 8: Copy the build files from the build stage into the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 5575 for accessing the app in the container
EXPOSE 5575

# Step 10: Command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

# The following Docker commands should be run **outside of the Dockerfile**,
# from the terminal in the project directory:

# 1. Build the Docker image:
# docker build -t ianmanlupig_coding_assignment14 .

# 2. Run the Docker container:
# docker run -p 5575:80 --name ianmanlupig_coding_assignment14 ianmanlupig_coding_assignment14
