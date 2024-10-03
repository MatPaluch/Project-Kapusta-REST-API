/**
 * @swagger
 * /transaction/expense:
 *   post:
 *     summary: Add a new expense
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 50.75
 *                 description: The amount of the expense (should be a positive number).
 *               category:
 *                 type: string
 *                 example: Products
 *                 description: The category of the expense. Valid categories include Products, Alcohol, Entertainment, Health, Transport, Housing, Technique, Communal, Communication, Sports, Hobbies, Education, and Other.
 *               description:
 *                 type: string
 *                 example: Bought groceries for the week
 *                 description: A brief description of the expense.
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2024-10-01
 *                 description: The date of the expense. If not provided, the current date will be used.
 *     responses:
 *       201:
 *         description: Expense successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 newBalance:
 *                   type: number
 *                   example: 949.25
 *                   description: The new balance of the user after the expense has been deducted.
 *                 transaction:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 60c72b2f5f1b2c6c7c8f1d3c
 *                       description: The unique identifier of the expense transaction.
 *                     description:
 *                       type: string
 *                       example: Bought groceries for the week
 *                       description: The description of the expense.
 *                     amount:
 *                       type: number
 *                       example: 50.75
 *                       description: The amount of the expense.
 *                     date:
 *                       type: string
 *                       format: date
 *                       example: 2024-10-01
 *                       description: The date of the expense.
 *                     category:
 *                       type: string
 *                       example: Products
 *                       description: The category of the expense.
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Error
 *                 code:
 *                   type: integer
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: Invalid token
 *       400:
 *         description: Validation error for the request data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Error
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Amount is required and should be a positive number
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Error
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
