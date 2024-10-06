# Use the official Node.js image based on Debian Buster
FROM node:20-buster

# Install required libraries for sharp
RUN apt-get update && apt-get install -y \
    libvips-dev \
    --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json (or yarn.lock) first
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp

# Copy the rest of your application code
COPY . .

# Expose the port your app will run on
EXPOSE 1337

# Start the application
CMD ["npm", "start"]
