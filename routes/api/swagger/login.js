const loginSwagger = {
    '/auth/login': {
      post: {
        summary: 'Log in a user',
        tags: ['Authorization'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    type: 'string',
                    example: 'johnlake@example.com',
                    description: 'User\'s email address',
                  },
                  password: {
                    type: 'string',
                    example: 'Examplepassword12#$',
                    description: 'User\'s password',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'User successfully logged in',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'Success',
                    },
                    code: {
                      type: 'integer',
                      example: 200,
                    },
                    message: {
                      type: 'string',
                      example: 'Successfully logged in.',
                    },
                    token: {
                      type: 'string',
                      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
                    },
                    data: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          example: '60c72b2f9b1e8b001c8c5d1e',
                        },
                        username: {
                          type: 'string',
                          example: 'John Lake',
                        },
                        email: {
                          type: 'string',
                          example: 'johnlake@example.com',
                        },
                        avatarURL: {
                          type: 'string',
                          example: 'https://s.gravatar.com/avatar/2a05350563a1f1b755926c329219afc4?s=300&d=wavatar&r=x',
                        },
                        balance: {
                          type: 'number',
                          example: 1000.50,
                        },
                      },
                    },
                    transactions: {
                      type: 'array',
                      items: {
                        type: 'object',
                        example: [],
                      },
                    },
                  },
                },
              },
            },
          },
          400: {
            description: 'User doesn\'t exist or validation error in request data',
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
                      example: 'User doesn\'t exist',
                    },
                  },
                },
              },
            },
          },
          401: {
            description: 'Incorrect email or password',
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
                      example: 'Email or password is wrong',
                    },
                    data: {
                      type: 'string',
                      example: 'Bad request',
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

  module.exports = loginSwagger;