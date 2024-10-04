const transactionIncome = {
  "/transaction/income": {
    get: {
      summary: "Get all income and stats for each month",
      tags: ["Transactions"],
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Successfully retrieved all income",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  incomes: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "60c72b2f5f1b2c6c7c8f1d3d",
                        },
                        description: { type: "string", example: "Salary" },
                        amount: { type: "number", example: 3000.0 },
                        date: {
                          type: "string",
                          format: "date",
                          example: "2023-01-15",
                        },
                        category: { type: "string", example: "Income" },
                      },
                    },
                  },
                  monthStats: {
                    type: "object",
                    description:
                      "Monthly total income, 'N/A' indicates no income recorded.",
                    properties: {
                      January: { type: "number", example: 5000 },
                      February: { type: "number", example: 4000 },
                      March: { type: "number", example: "N/A" },
                      April: { type: "number", example: 4500 },
                      May: { type: "number", example: "N/A" },
                      June: { type: "number", example: 5500 },
                      July: { type: "number", example: "N/A" },
                      August: { type: "number", example: 6000 },
                      September: { type: "number", example: "N/A" },
                      October: { type: "number", example: 7000 },
                      November: { type: "number", example: "N/A" },
                      December: { type: "number", example: 8000 },
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
        404: {
          description: "User not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "string", example: "Error" },
                  code: { type: "integer", example: 404 },
                  message: { type: "string", example: "User not found" },
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

module.exports = transactionIncome;
