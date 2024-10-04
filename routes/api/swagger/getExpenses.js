const getExpenses = {
  "/transaction/expense": {
    get: {
      summary: "Get all expenses and stats for each month",
      tags: ["Transactions"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Successfully retrieved all expenses",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  expenses: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "60c72b2f5f1b2c6c7c8f1d3d",
                        },
                        description: {
                          type: "string",
                          example: "Groceries",
                        },
                        amount: {
                          type: "number",
                          example: 50.0,
                        },
                        date: {
                          type: "string",
                          format: "date",
                          example: "2023-01-15",
                        },
                        category: {
                          type: "string",
                          example: "Products",
                        },
                      },
                    },
                  },
                  monthStats: {
                    type: "object",
                    properties: {
                      January: {
                        type: "number",
                        example: 5678,
                      },
                      February: {
                        type: "number",
                        example: 765,
                      },
                      March: {
                        type: "string",
                        example: "N/A",
                      },
                      April: {
                        type: "number",
                        example: 354,
                      },
                      May: {
                        type: "string",
                        example: "N/A",
                      },
                      June: {
                        type: "number",
                        example: 765,
                      },
                      July: {
                        type: "number",
                        example: 45698,
                      },
                      August: {
                        type: "number",
                        example: 89,
                      },
                      September: {
                        type: "string",
                        example: "N/A",
                      },
                      October: {
                        type: "number",
                        example: 45,
                      },
                      November: {
                        type: "string",
                        example: "N/A",
                      },
                      December: {
                        type: "string",
                        example: "N/A",
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
                  status: {
                    type: "string",
                    example: "Error",
                  },
                  code: {
                    type: "integer",
                    example: 404,
                  },
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

module.exports = getExpenses;
