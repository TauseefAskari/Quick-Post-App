# Quick Post App

Quick Post is a full-stack social posting application. Users can create posts with an image and caption, then view the published posts in a feed.

## Features

- Create a post with an image and caption
- Upload images through ImageKit
- Store post data in MongoDB
- View posts in a feed
- React frontend with Vite
- Express and Node.js backend

## Project Structure

```text
Quick-post-App/
├── Backend/   Express API, MongoDB model, and ImageKit upload service
└── Frontend/  React and Vite user interface
```

## Requirements

- Node.js 18 or newer
- npm
- A MongoDB connection string
- An ImageKit private key

## Configuration

Create `Backend/.env` with the backend credentials:

```env
MONGODB_URL=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Create `Frontend/.env` with the backend API URL:

```env
VITE_API_URL=http://localhost:3000
```

Do not commit either `.env` file or any credentials to source control.

## Installation

Install dependencies in both project folders:

```bash
cd Backend
npm install

cd ../Frontend
npm install
```

## Running the Application

Start the backend in one terminal:

```bash
cd Backend
node server.js
```

The API runs at `http://localhost:3000`.

Start the frontend in another terminal:

```bash
cd Frontend
npm run dev
```

Vite will display the local development URL in the terminal.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/create-post` | Upload an image and create a post |
| `GET` | `/posts` | Retrieve all posts |

The create-post request uses `multipart/form-data` with these fields:

- `image`: the image file
- `caption`: the post caption

## Frontend Routes

- `/create-post` - Post creation form
- `/feed` - Published post feed

## Production Build

Create a production build of the frontend with:

```bash
cd Frontend
npm run build
```
