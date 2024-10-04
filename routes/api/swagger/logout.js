const logout = {
  "/auth/logout": {
    post: {
      summary: "Log out a user",
      tags: ["Authorization"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "User successfully logged out",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Successfully logged out",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
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
                    example: 401,
                  },
                  message: {
                    type: "string",
                    example: "Invalid token",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "User not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "User not found",
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

module.exports = logout;
