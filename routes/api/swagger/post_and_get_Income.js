const post_and_get_Income = {
  '/transaction/income': {
    post: {
      summary: 'Add a new income',
      tags: ['Transactions'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                amount: {
                  type: 'number',
                  minimum: 0,
                  example: 1500.0,
                  description: 'The amount of the income (should be a positive number).',
                },
                category: {
                  type: 'string',
                  enum: ['Salary', 'Other income'],
                  example: 'Salary',
                  description:
                    'The category of the income. Valid categories include Salary and Other income.',
                },
                description: {
                  type: 'string',
                  example: 'Monthly salary',
                  maxLength: 100,
                  description:
                    'A brief description of the income. Maximum length is 100 characters.',
                },
                date: {
                  type: 'string',
                  format: 'date',
                  example: '01.10.2024',
                  description:
                    'The date of the income in YYYY-MM-DD format. If not provided, the current date will be used.',
                },
              },
              required: ['amount', 'category'], // Specify required fields
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Income successfully added',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  newBalance: {
                    type: 'number',
                    example: 3500.0,
                    description: 'The new balance of the user after the income has been added.',
                  },
                  transaction: {
                    type: 'object',
                    properties: {
                      _id: {
                        type: 'string',
                        example: '60c72b2f5f1b2c6c7c8f1d3d',
                        description: 'The unique identifier of the income transaction.',
                      },
                      description: {
                        type: 'string',
                        example: 'Monthly salary',
                        description: 'The description of the income.',
                      },
                      amount: {
                        type: 'number',
                        example: 1500.0,
                        description: 'The amount of the income.',
                      },
                      date: {
                        type: 'string',
                        format: 'date',
                        example: '2024-10-01',
                        description: 'The date of the income.',
                      },
                      category: {
                        type: 'string',
                        example: 'Salary',
                        description: 'The category of the income.',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        401: {
          description: 'Unauthorized',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'Error',
                  },
                  code: {
                    type: 'integer',
                    example: 401,
                  },
                  message: {
                    type: 'string',
                    example: 'Invalid token',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Validation error in the request data',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'Error',
                  },
                  code: {
                    type: 'integer',
                    example: 400,
                  },
                  message: {
                    type: 'string',
                    example: 'Amount is required and should be a positive number.',
                  },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal server error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'Error',
                  },
                  code: {
                    type: 'integer',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Internal server error. Please try again later.',
                  },
                },
              },
            },
          },
        },
      },
    },
    get: {
      summary: 'Get all income and stats for each month',
      tags: ['Transactions'],
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: 'Successfully retrieved all income',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  incomes: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        _id: {
                          type: 'string',
                          example: '60c72b2f5f1b2c6c7c8f1d3d',
                        },
                        description: { type: 'string', example: 'Salary' },
                        amount: { type: 'number', example: 3000.0 },
                        date: {
                          type: 'string',
                          format: 'date',
                          example: '15.01.2023',
                        },
                        category: { type: 'string', example: 'Income' },
                      },
                    },
                  },
                  monthStats: {
                    type: 'object',
                    description: "Monthly total income, 'N/A' indicates no income recorded.",
                    properties: {
                      January: { type: 'number', example: 5000 },
                      February: { type: 'number', example: 4000 },
                      March: { type: 'number', example: 'N/A' },
                      April: { type: 'number', example: 4500 },
                      May: { type: 'number', example: 'N/A' },
                      June: { type: 'number', example: 5500 },
                      July: { type: 'number', example: 'N/A' },
                      August: { type: 'number', example: 6000 },
                      September: { type: 'number', example: 'N/A' },
                      October: { type: 'number', example: 7000 },
                      November: { type: 'number', example: 'N/A' },
                      December: { type: 'number', example: 8000 },
                    },
                  },
                },
              },
            },
          },
        },
        401: {
          description: 'Unauthorized',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: { type: 'string', example: 'Error' },
                  code: { type: 'integer', example: 401 },
                  message: { type: 'string', example: 'Invalid token' },
                },
              },
            },
          },
        },
        404: {
          description: 'User not found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: { type: 'string', example: 'Error' },
                  code: { type: 'integer', example: 404 },
                  message: { type: 'string', example: 'User not found' },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal server error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: { type: 'string', example: 'Error' },
                  code: { type: 'integer', example: 500 },
                  message: { type: 'string', example: 'Internal server error' },
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = post_and_get_Income;
