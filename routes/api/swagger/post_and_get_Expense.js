const post_and_get_Expense = {
  '/transaction/expense': {
    post: {
      summary: 'Add a new expense',
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
                  example: 50.75,
                  description: 'The amount of the expense (should be a positive number).',
                },
                category: {
                  type: 'string',
                  example: 'Products',
                  description:
                    'The category of the expense. Valid categories include Products, Alcohol, Entertainment, Health, Transport, Housing, Technique, Communal, Communication, Sports, Hobbies, Education, and Other.',
                },
                description: {
                  type: 'string',
                  example: 'Bought groceries for the week',
                  description: 'A brief description of the expense.',
                },
                date: {
                  type: 'string',
                  format: 'date',
                  example: '01.10.2024',
                  description:
                    'The date of the expense. If not provided, the current date will be used.',
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Expense successfully added',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  newBalance: {
                    type: 'number',
                    example: 949.25,
                    description: 'The new balance of the user after the expense has been deducted.',
                  },
                  transaction: {
                    type: 'object',
                    properties: {
                      _id: {
                        type: 'string',
                        example: '60c72b2f5f1b2c6c7c8f1d3c',
                        description: 'The unique identifier of the expense transaction.',
                      },
                      description: {
                        type: 'string',
                        example: 'Bought groceries for the week',
                        description: 'The description of the expense.',
                      },
                      amount: {
                        type: 'number',
                        example: 50.75,
                        description: 'The amount of the expense.',
                      },
                      date: {
                        type: 'string',
                        format: 'date',
                        example: '2024-10-01',
                        description: 'The date of the expense.',
                      },
                      category: {
                        type: 'string',
                        example: 'Products',
                        description: 'The category of the expense.',
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
          description: 'Validation error for the request data',
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
                    example: 'Amount is required and should be a positive number',
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
                    example: 'Internal server error',
                  },
                },
              },
            },
          },
        },
      },
    },
    get: {
      summary: 'Get all expenses and stats for each month',
      tags: ['Transactions'],
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: 'Successfully retrieved all expenses',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  expenses: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        _id: {
                          type: 'string',
                          example: '60c72b2f5f1b2c6c7c8f1d3d',
                        },
                        description: {
                          type: 'string',
                          example: 'Groceries',
                        },
                        amount: {
                          type: 'number',
                          example: 50.0,
                        },
                        date: {
                          type: 'string',
                          format: 'date',
                          example: '15.01.2023',
                        },
                        category: {
                          type: 'string',
                          example: 'Products',
                        },
                      },
                    },
                  },
                  monthStats: {
                    type: 'object',
                    properties: {
                      January: {
                        type: 'number',
                        example: 5678,
                      },
                      February: {
                        type: 'number',
                        example: 765,
                      },
                      March: {
                        type: 'string',
                        example: 'N/A',
                      },
                      April: {
                        type: 'number',
                        example: 354,
                      },
                      May: {
                        type: 'string',
                        example: 'N/A',
                      },
                      June: {
                        type: 'number',
                        example: 765,
                      },
                      July: {
                        type: 'number',
                        example: 45698,
                      },
                      August: {
                        type: 'number',
                        example: 89,
                      },
                      September: {
                        type: 'string',
                        example: 'N/A',
                      },
                      October: {
                        type: 'number',
                        example: 45,
                      },
                      November: {
                        type: 'string',
                        example: 'N/A',
                      },
                      December: {
                        type: 'string',
                        example: 'N/A',
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
        404: {
          description: 'User not found',
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
                    example: 404,
                  },
                  message: {
                    type: 'string',
                    example: 'User not found',
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
                    example: 'Internal server error',
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

module.exports = post_and_get_Expense;
