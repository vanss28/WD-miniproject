const express = require('express');
const cors = require('cors')
const app = express();
require('./config/dbConnect')
const usersRoute = require('./routes/users/UserRoute')
const transactionRoutes = require('./routes/transactions/TransactionRoute')
const accountRoutes = require("./routes/accounts/AccountsRoute");
const globalErrHandler = require('./middlewares/globalErrhandler');

app.use(express.json()); 

app.use(cors());


app.use("/api/v1/users",usersRoute);
app.use("/api/v1/accounts",accountRoutes);
app.use("/api/v1/transactions", transactionRoutes);
app.use(globalErrHandler);

const PORT = process.env.PORT || 9000;
app.listen(PORT , console.log(`Server is up and running on port ${PORT}`));