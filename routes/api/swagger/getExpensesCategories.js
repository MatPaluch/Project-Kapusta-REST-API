const transactionExpenseCategories = {
  "/transaction/expense-categories": {
    get: {
      summary: "Get all expense categories",
      tags: ["Transactions"],
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Successfully retrieved all expense categories",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "string", example: "Success" },
                  code: { type: "integer", example: 200 },
                  expenseCategories: {
                    type: "array",
                    items: { type: "string" },
                    example: [
                      "Products",
                      "Alcohol",
                      "Entertainment",
                      "Health",
                      "Transport",
                      "Housing",
                      "Technique",
                      "Communal, Communication",
                      "Sports, Hobbies",
                      "Education",
                      "Other",
                    ],
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

module.exports = transactionExpenseCategories;
