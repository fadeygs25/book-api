# Book Management API

This project is a Book Management API built with Node.js, Express, TypeScript, and MongoDB. It also includes WebSocket integration and is containerized with Docker.

## Features

- CRUD operations for book management.
- Real-time WebSocket integration.
- MongoDB for data storage.
- Fully containerized with Docker and Docker Compose.
- Organized and scalable project structure.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Project Setup

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### Step 2: Configure Environment Variables

Create a `.env` file in the root directory by copying the example file:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration. Example:

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/books
```

### Step 3: Build and Run the Project with Docker

Build and start the Docker containers using the following command:

```bash
docker-compose up --build
```

This will:

- Build the `app` container for the Node.js application.
- Start a `mongo` container for the MongoDB database.

### Step 4: Access the API

Once the containers are running, you can access the API at:

- **Base URL:** `http://localhost:5000`
- **API Endpoints:**
  - `POST /api/books` - Create a new book.
  - `GET /api/books` - Retrieve all books.
  - `GET /api/books/:id` - Retrieve a book by ID.
  - `PUT /api/books/:id` - Update a book by ID.
  - `DELETE /api/books/:id` - Delete a book by ID.

### Step 5: Stop the Containers

To stop the running containers, press `Ctrl+C` in the terminal where the containers are running, then run:

```bash
docker-compose down
```

### Step 6: Run Tests (Optional)

If you have tests configured, you can run them inside the Docker container:

```bash
docker exec -it <container_name> npm test
```

Replace `<container_name>` with the name of the `app` container.

## Project Structure

```plaintext
src
├── adapters
├── config
├── constants
├── controllers
├── dtos
├── events
├── exceptions
├── factories
├── jobs
├── middlewares
├── models
├── repositories
├── routes
├── services
├── strategies
├── tests
├── types
├── utils
├── validators
├── app.ts
└── server.ts
```

## Additional Notes

- To rebuild containers after code changes:

  ```bash
  docker-compose up --build
  ```

- Ensure that the `MONGO_URI` in the `.env` file matches the connection string provided in the `docker-compose.yml` file.

## License

This project is licensed under the [MIT License](LICENSE).

