# Project-Kapusta REST API 🥬

Project-Kapusta REST API is designed to help users manage their personal finances by tracking income
and expenses. This API allows users to securely store, retrieve, update, and delete financial
records, enabling them to manage their budget effectively.

## Technologies

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **API Documentation**: Swagger UI
- **Authentication**: JWT (JSON Web Token) for secure API access (if implemented)
- **Validation**: Joi for input validation

## Features

- **CRUD Operations**: Allows users to create, read, update, and delete income and expense records.
- **User Authentication**: Register and authenticate users securely using JWT tokens (if
  implemented).
- **Data Validation**: Input data validation ensures consistency and accuracy of the financial data.
- **Filter and Sort**: Users can filter and sort financial records by date, type, or amount.
- **API Documentation**: Full API documentation available via Swagger UI for easy reference.

## API Endpoints

- `GET /api/transactions`: Fetch all transactions.
- `POST /api/transactions`: Create a new transaction (income/expense).
- `PUT /api/transactions/:id`: Update a specific transaction.
- `DELETE /api/transactions/:id`: Delete a specific transaction.

## API Documentation

The full API documentation is available through Swagger UI:  
http://localhost:5000/api-docs

Alternatively, check the live version hosted on Vercel:
[Live API Docs](https://project-kapusta-rest-api.vercel.app/api-docs/)

## Environment Setup

Before running the app, create a .env file with the following variables:

```bash
MONGO_URI=#your-mongo-db-uri
JWT_SECRET=#your-jwt-secret
PORT=5000
```

### Clone the repository:

```bash
git clone https://github.com/MatPaluch/Project-Kapusta-REST-API.git
cd Project-Kapusta-REST-API
```

### Install dependencies:

```bash
npm install
```

### Run the application:

```bash
npm start
```

The server will run on http://localhost:5000.
