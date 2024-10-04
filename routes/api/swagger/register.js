const register = {
  "/auth/register": {
    post: {
      summary: "Register a new user",
      tags: ["Authorization"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "johnlake@example.com",
                  description: "User's email address",
                },
                password: {
                  type: "string",
                  example: "Examplepassword12#$",
                  description: "User's password",
                },
                username: {
                  type: "string",
                  example: "John Lake",
                  description: "User's full name or username",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User successfully registered",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 201,
                  },
                  message: {
                    type: "string",
                    example: "User successfully created!",
                  },
                  user: {
                    type: "object",
                    properties: {
                      username: {
                        type: "string",
                        example: "John Lake",
                      },
                      email: {
                        type: "string",
                        example: "johndoe@example.com",
                      },
                      avatarURL: {
                        type: "string",
                        example:
                          "https://s.gravatar.com/avatar/2a05350563a1f1b755926c329219afc4?s=300&d=wavatar&r=x",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Validation error in request data",
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
                    example: "Invalid request body",
                  },
                },
              },
            },
          },
        },
        409: {
          description: "Email is already in use",
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
                    example: "Email in use",
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
                    example: "Internal server error",
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

module.exports = register;
