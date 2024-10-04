const getUserData = {
  "/user": {
    get: {
      summary: "Get all user data and transactions",
      description:
        "Retrieves the logged-in user's profile data, including avatar URL, email, balance, and a list of their transactions.",
      security: [{ bearerAuth: [] }],
      tags: ["User"],
      responses: {
        200: {
          description: "Returns user profile data and transactions.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  avatarURL: {
                    type: "string",
                    description: "URL to the user's avatar image.",
                    example:
                      "https://s.gravatar.com/avatar/b871b144b4a00401dcc0bb73bf6cb509?s=300&d=wavatar",
                  },
                  email: {
                    type: "string",
                    description: "The user's email address.",
                    example: "johnlake@example.com",
                  },
                  balance: {
                    type: "number",
                    description: "The user's current account balance.",
                    example: 1500.5,
                  },
                  isBalanceSet: {
                    type: "boolean",
                    description: "Indicates if the user has set their balance.",
                    example: true,
                  },
                  transactions: {
                    type: "array",
                    description:
                      "List of the user's transactions, sorted by date.",
                    items: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          description: "The transaction's unique identifier.",
                          example: "60c72b2f4f1a4c3d88f1f8b1",
                        },
                        description: {
                          type: "string",
                          description: "Description of the transaction.",
                          example: "Grocery shopping",
                        },
                        category: {
                          type: "string",
                          description: "Category of the transaction.",
                          example: "Groceries",
                        },
                        amount: {
                          type: "number",
                          description:
                            "Amount of the transaction (positive for income, negative for expenses).",
                          example: 100.5,
                        },
                        date: {
                          type: "string",
                          description:
                            "The date when the transaction was created.",
                          example: "2023-09-15",
                        },
                      },
                    },
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
                  status: { type: "string", example: "Error" },
                  code: { type: "integer", example: 401 },
                  message: { type: "string", example: "Invalid token" },
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
                  status: { type: "string", example: "Error" },
                  code: { type: "integer", example: 500 },
                  message: { type: "string", example: "Internal server error" },
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = getUserData;
