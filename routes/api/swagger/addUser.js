const addUser = {
    "/user": {
      post: {
        summary: "Add a new user",
        tags: ["Users"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: {
                    type: "string",
                    example: "john_doe",
                    description: "Unique username for the new user.",
                  },
                  email: {
                    type: "string",
                    format: "email",
                    example: "john.doe@example.com",
                    description: "Email address of the user.",
                  },
                  password: {
                    type: "string",
                    example: "SecurePassword123!",
                    description: "Password for the user account.",
                  },
                },
                required: ["username", "email", "password"], // Wymagane pola
              },
            },
          },
        },
        responses: {
          201: {
            description: "User successfully created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      example: "60c72b2f5f1b2c6c7c8f1d3e",
                      description: "Unique identifier of the newly created user.",
                    },
                    message: {
                      type: "string",
                      example: "User created successfully.",
                      description: "Success message indicating that the user was created.",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Validation error in the request data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "Error",
                    },
                    code: {
                      type: "integer",
                      example: 400,
                    },
                    message: {
                      type: "string",
                      example: "Username is required and must be unique.",
                    },
                  },
                },
              },
            },
          },
          409: {
            description: "Conflict, user already exists",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "Error",
                    },
                    code: {
                      type: "integer",
                      example: 409,
                    },
                    message: {
                      type: "string",
                      example: "User with this email already exists.",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "Error",
                    },
                    code: {
                      type: "integer",
                      example: 500,
                    },
                    message: {
                      type: "string",
                      example: "Internal server error. Please try again later.",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  
  module.exports = addUser;
  