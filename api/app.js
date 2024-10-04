const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const authRouter = require("../routes/api/auth.js");
const userRouter = require("../routes/api/user");
const transactionRouter = require("../routes/api/transaction");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

require("../config/passportJWT.js");

app.get("/", async (req, res) => {
  res.send({
    message: "Hello! Everything is working.",
    documentation: "For specific documentation of this API go to /api-docs",
  });
});
app.get("/favicon.ico", (req, res) => {
  res.status(204).end(); // Odpowiedz "No Content" i zakończ
});

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/transaction", transactionRouter);

const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const register = require("../routes/api/swagger/register.js");
const login = require("../routes/api/swagger/login.js");
const logout = require("../routes/api/swagger/logout.js");

const addExpense = require("../routes/api/swagger/addExpense.js");
const getExpenses = require("../routes/api/swagger/getExpenses.js");

const addIncome = require("../routes/api/swagger/addIncome.js");
const getIncomes = require("../routes/api/swagger/getIncomes.js");

const deleteTransaction = require("../routes/api/swagger/deleteTransaction.js");
const getExpensesCategories = require("../routes/api/swagger/getExpensesCategories.js");
const getIncomesCategories = require("../routes/api/swagger/getIncomesCategories.js");
const getMonthlyReports = require("../routes/api/swagger/getMonthlyReports.js");
const updateBalance = require("../routes/api/swagger/updateBalance.js");
const getUserData = require("../routes/api/swagger/getUserData.js");
const getAvatar = require("../routes/api/swagger/getAvatar.js");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Project Kapusta REST API",
      version: "1.0.0",
      description: "Documentation API for Project Kapusta",
    },
    servers: [
      {
        url: "https://project-kapusta-rest-api.vercel.app",
        description: "Production server", // Opcjonalny opis serwera
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Opcjonalny format
        },
      },
    },
    paths: [
      {
        // ...register,
        // ...login,
        // ...logout,
        ...getExpenses,
        ...getIncomes,
        // ...deleteTransaction,
        // ...getExpensesCategories,
        // ...getIncomesCategories,
        // ...getMonthlyReports,
        // ...updateBalance,
        // ...getUserData,
        // ...getAvatar,
      },
      { ...addIncome, ...addExpense },
    ],
  },
  apis: [path.join(__dirname, "../routes/api/*.js")], // Ścieżka do plików zawierających endpointy
};

const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
