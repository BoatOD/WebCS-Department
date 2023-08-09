# client/Dockerfile
FROM node:16-alpine

# Create a non-root user with a specified UID and GID
RUN addgroup -g 1001 -S appuser && adduser -u 1001 -S appuser -G appuser

# Set the working directory and assign proper ownership
WORKDIR /app/client
RUN chown -R appuser:appuser /app/client

# Switch to the non-root user
USER appuser

COPY package.json package-lock.json ./
RUN npm install 

COPY next.config.js ./next.config.js

# Ensure proper ownership for copied files
USER root
COPY . /app/client
RUN chown -R appuser:appuser /app/client

# Switch back to the non-root user
USER appuser

CMD ["npm", "run", "dev"]

