# Stage 1 - Build the app
FROM node:20-buster AS build

# Set working directory
WORKDIR /opt/

# Install dependencies for sharp and other native modules
RUN apt-get update && apt-get install -y build-essential gcc autoconf automake zlib1g-dev libpng-dev libvips42 git && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install global dependencies
RUN npm install -g node-gyp

# Increase npm timeout and install production dependencies
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --only=production

# Set environment to production for the build
ENV NODE_ENV=production

# Copy the rest of the application code
COPY . .

# Build the application with production configuration
RUN npm run build

# Stage 2 - Serve the app
FROM node:20-buster

# Set working directory
WORKDIR /opt/

# Install runtime dependencies for sharp
RUN apt-get update && apt-get install -y libvips42 && rm -rf /var/lib/apt/lists/*

# Copy built files from the build stage
COPY --from=build /opt/ /opt/

# Expose the desired port (replace with your app's actual port)
EXPOSE 1337

# Set environment to production for runtime
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
