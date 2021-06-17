//initializing the app
const env = require("dotenv");
env.config()
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();

//routes section
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
//database connection with mongoose ODM
mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.ttdpq.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    .then(() => {
        console.log("DataBase Connected");
    });

//middleware section
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//declaring API for production
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
//listen section
app.listen(process.env.PORT, () =>
    console.log(`Server is running on this ${process.env.PORT}`)
);