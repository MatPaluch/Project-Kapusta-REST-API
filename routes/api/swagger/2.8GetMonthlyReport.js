/**
 * @swagger
 * /transaction/period-data:
 *   get:
 *     summary: Get monthly financial report
 *     description: Retrieves a summary of income and expense transactions for a specified month.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Transactions
 *     parameters:
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           example: "2023-09"
 *         required: true
 *         description: |
 *           The period for the report in the format `YYYY-MM` (e.g., "2023-09").
 *           It must be a valid date format in this pattern.
 *     responses:
 *       200:
 *         description: Returns the financial report for the specified month.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 incomes:
 *                   type: object
 *                   properties:
 *                     total:
 *                       example: 2000
 *                       type: number
 *                       description: Total income for the period.
 *                     incomesData:
 *                       type: object
 *                       description: |
 *                         A breakdown of incomes by category and description.
 *                       example:
 *                         Salary:
 *                           total: 2000
 *                           "Monthly salary": 2000
 *                 expenses:
 *                   type: object
 *                   properties:
 *                     total:
 *                       example: 840
 *                       type: number
 *                       description: Total expenses for the period.
 *                     expensesData:
 *                       type: object
 *                       description: |
 *                         A breakdown of expenses by category and description.
 *                       example:
 *                         Groceries:
 *                           total: 540
 *                           "Weekly shopping": 500
 *                           "McDonalds": 40
 *                         Alcohol:
 *                           total: 300
 *                           "Wine": 150
 *                           "Beer": 150
 *       400:
 *         description: Invalid date format in the period query parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Error"
 *                 message:
 *                   type: string
 *                   example: "Invalid date format. Please use YYYY-MM."
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
